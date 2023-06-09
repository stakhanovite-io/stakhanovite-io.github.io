import 'cross-fetch/polyfill';
import { createObjectCsvWriter } from 'csv-writer';
import fs from 'fs';

const baseUrl = 'https://cardano-mainnet.blockfrost.io/api/v0/';
const poolId = process.env.POOL_ID;
if (!poolId) {
  exit('Missing POOL_ID');
}
const blockfrostProjectId = process.env.BLOCKFROST_PROJECT_ID;
if (!blockfrostProjectId) {
  exit('Missing BLOCKFROST_PROJECT_ID');
}

const dataFolder = `${__dirname}/../../assets/public/cardano/data`;
const epochsFolder = `${dataFolder}/epochs`;
const poolsFolder = `${dataFolder}/pools`;

export async function fetchWithHeaders(input: string, init: RequestInit = {}): Promise<any> {
  return (await fetch(`${baseUrl}/${input}`, {
      method: 'GET',
      headers: {'Project_id': blockfrostProjectId},
      ...init
  })).json();
}

async function callPaged<T>(url: string, count: number = 100, page: number = 1, acc = []): Promise<T[]> {
  const res = await fetchWithHeaders(`${url}?page=${page}&count=${count}`);
  const allRes = [...acc, ...res];
  if (res.length >= count) {
    return callPaged(url, count, page+1, allRes);
  } else {
    return Promise.resolve(allRes);
  }
}

type Delegator = {
  address: string;
}

type Reward = {
  epoch: number;
  amount: string;
  pool_id: string;
  type: string;
}

async function writeBlob(path: string, json: any): Promise<void> {
  fs.promises.writeFile(path, JSON.stringify(json, null, 2));
}

async function readBlob<T>(file: string): Promise<T> {
  return fs.promises.readFile(file, {encoding: 'utf-8'}).then(JSON.parse);
}

const cache = {};

async function pricesForEpoch(epoch: number, i: number): Promise<any> {
  if (epoch in cache) {
    return cache[epoch];
  } else {
    const epochDetails = await fetchWithHeaders(`epochs/${epoch}`);
    const date = new Date(1000*epochDetails.end_time);
    const strDate = `${date.getUTCDate()}-${date.getUTCMonth()+1}-${date.getUTCFullYear()}`;
    
    const resp = await new Promise<any>(async (resolve) => {
      setTimeout(async () => {
        try {
          console.log(`Fetching price for ${strDate}`);
          const resp = await (await fetch(`https://api.coingecko.com/api/v3/coins/cardano/history?date=${strDate}&localization=false`, {
            method: 'GET'
          })).text();
          resolve(resp);
        } catch(e) {
          console.error("Failed to fetch price", e);
          resolve({});
        }
      }, 1000*i);
    });
    try {
      const gecko = await JSON.parse(resp);
      const priceEUR = gecko.market_data.current_price.eur;
      const priceUSD = gecko.market_data.current_price.usd;
      const priceAUSD = gecko.market_data.current_price.aud;
      const priceYEN = gecko.market_data.current_price.jpy;
      const prices = {
        date: strDate,
        priceEUR: priceEUR,
        priceUSD: priceUSD,
        priceAUSD: priceAUSD,
        priceYEN: priceYEN,
      };
      cache[epoch] = prices;
      return prices;
    } catch (e) {
      console.error("Rate limited while fetching price");
      return {};
    }
  }
}

function exit(s: string) {
  console.error(s);
  process.exit(1);
}

(async function() {
  // Epoch details

  await fs.promises.mkdir(dataFolder, {recursive: true});
  await fs.promises.mkdir(epochsFolder, {recursive: true});
  await fs.promises.mkdir(poolsFolder, {recursive: true});

  const latest = await fetchWithHeaders(`epochs/latest`);
  const { epoch } = latest;

  console.log(`Epoch ${epoch}`);

  await writeBlob(`${epochsFolder}/latest.json`, latest);

  // Pool details

  console.log("Pool");

  const poolDetails = await fetchWithHeaders(`pools/${poolId}`);
  const { ticker } = await fetchWithHeaders(`pools/${poolId}/metadata`);

  if (!ticker) {
    return exit("Failed to access ticker");
  }

  await writeBlob(`${poolsFolder}/${ticker}.json`, poolDetails);

  // Epochs stakes

  console.log("Stakes");

  const stakes = await callPaged(`epochs/${epoch}/stakes/${poolId}`);

  const epochStakesFolder = `${epochsFolder}/${epoch}/stakes/`;
  await fs.promises.mkdir(epochStakesFolder, {recursive: true});
  await writeBlob(`${epochStakesFolder}/${ticker}.json`, stakes);

  // Delegators rewards

  const delegators = await callPaged<Delegator>(`pools/${poolId}/delegators`);

  console.log(`Rewards (#${delegators.length})`);

  const accountsFolder =`${dataFolder}/accounts/`;
  for (const delegator of delegators) {
    const accountFolder = `${accountsFolder}/${delegator.address}`;
    await fs.promises.mkdir(accountFolder, {recursive: true});

    const rewardsJSON = `${accountFolder}/rewards.json`;

    const existingRewards = await readBlob<Reward[]>(rewardsJSON);
    const newestExistingRewardEpoch = existingRewards.map(v => v.epoch)[existingRewards.length-1];

    // Persist all rewards as JSON

    const rewards = await callPaged<Reward>(`accounts/${delegator.address}/rewards`);
    await writeBlob(rewardsJSON, rewards);

    const newRewards = rewards.filter(r => r.epoch > newestExistingRewardEpoch).sort();

    // Persist all rewards + prices as CSV

    const csvWriter = createObjectCsvWriter({
      path: `${accountFolder}/rewards.csv`,
      header: [
          {id: 'epoch', title: 'EPOCH'},
          {id: 'amount', title: 'AMOUNT'},
          {id: 'date', title: 'DATE'},
          {id: 'priceEUR', title: 'PRICE_EUR'},
          {id: 'priceUSD', title: 'PRICE_USD'},
          {id: 'priceAUSD', title: 'PRICE_AUSD'},
          {id: 'priceYEN', title: 'PRICE_JPY'},
      ],
      append: true
    });
    const rewardsWithPrices = await Promise.all(newRewards.map(async (o, i) => {
      o.amount = (Number.parseInt(o.amount) / 1000000).toString();

      try {
        const epochPrices = await pricesForEpoch(o.epoch, i);
        return {...o, ...epochPrices};
      } catch (e) {
        console.error("Error while fetching price", e);
        return o;
      }
    }));
    await csvWriter.writeRecords(rewardsWithPrices);
  }

  }().catch(e => {
    exit(`Failure: ${e}`);
}));
