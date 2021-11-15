import 'cross-fetch/polyfill';
import { createObjectCsvWriter } from 'csv-writer';
import fs from 'fs';

const baseUrl = 'https://cardano-mainnet.blockfrost.io/api/v0/';
const poolId = process.env.POOL_ID;
if (!poolId) {
  console.error('Missing POOL_ID');
  process.exit(1);
}
const blockfrostProjectId = process.env.BLOCKFROST_PROJECT_ID;
if (!blockfrostProjectId) {
  console.error('Missing BLOCKFROST_PROJECT_ID');
  process.exit(1);
}

const dataFolder = `${__dirname}/../../assets/public/cardano/data`;

export async function call(input: string, init: RequestInit = {}): Promise<any> {
  return (await fetch(`${baseUrl}/${input}`, {
      method: 'GET',
      headers: {'Project_id': blockfrostProjectId},
      ...init
  })).json();
}

async function callPaged(url: string, count: number = 100, page: number = 1, acc = []): Promise<any> {
  const res = await call(`${url}?page=${page}&count=${count}`);
  const allRes = [...acc, ...res];
  if (res.length >= count) {
    return callPaged(url, count, page+1, allRes);
  } else {
    return Promise.resolve(allRes);
  }
}

async function writeBlob(path: string, name: string, json: any): Promise<void> {
  await fs.promises.mkdir(path, {recursive: true});
  fs.promises.writeFile(`${path}/${name}.json`, JSON.stringify(json, null, 2));
}

const cache = {};

async function pricesForEpoch(epoch: number): Promise<any> {
  if (epoch in cache) {
    return cache[epoch];
  } else {
    const epochDetails = await call(`epochs/${epoch}`);
    const date = new Date(1000*epochDetails.start_time);
    const strDate = `${date.getUTCDate()}-${date.getUTCMonth()+1}-${date.getUTCFullYear()}`;
    const gecko = (await fetch(`https://api.coingecko.com/api/v3/coins/cardano/history?date=${strDate}&localization=false`, {
      method: 'GET'
    })).json();
    const priceEUR = (await gecko).market_data.current_price.eur;
    const priceUSD = (await gecko).market_data.current_price.usd;
    const priceAUSD = (await gecko).market_data.current_price.aud;
    const priceYEN = (await gecko).market_data.current_price.jpy;
    const prices = {
      date: strDate,
      priceEUR: priceEUR,
      priceUSD: priceUSD,
      priceAUSD: priceAUSD,
      priceYEN: priceYEN,
    };
    cache[epoch] = prices;
    return prices;
  }
}

(async function() {
  // Epoch details

  console.log("Epoch");

  const latest = await call(`epochs/latest`);
  const { epoch } = latest;

  await writeBlob(`${dataFolder}/epochs`, 'latest', latest);

  // Pool details

  console.log("Pool");

  const poolDetails = await call(`pools/${poolId}`);
  const { ticker } = await call(`pools/${poolId}/metadata`);

  const poolsFolder = `${dataFolder}/pools`;
  await writeBlob(poolsFolder, ticker, poolDetails);

  // Delegators rewards

  const delegators = await callPaged(`pools/${poolId}/delegators`);

  console.log(`Rewards (#${delegators.length})`);

  const accountsFolder =`${dataFolder}/accounts/`;
  for (const delegator of delegators) {
    const accountFolder = `${accountsFolder}/${delegator.address}`;
    const rewards = await callPaged(`accounts/${delegator.address}/rewards`);
    await writeBlob(accountFolder, 'rewards', rewards);

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
      ]
    });
    const rewardsWithPrices = Promise.all(rewards.map(async o => {
      o.amount = o.amount / 1000000;
      const epochPrices = await pricesForEpoch(o.epoch+2);
      return {...o, ...epochPrices};
    }));
    await csvWriter.writeRecords(await rewardsWithPrices);
  }

  // Epochs stakes

  console.log("Stakes");

  const stakes = await callPaged(`epochs/${epoch}/stakes/${poolId}`);

  const folder = `${dataFolder}/epochs/${epoch}/stakes/`;
  await writeBlob(folder, ticker, stakes);
  }().catch(e => {
	  console.error("Failure" ,e)
}));
