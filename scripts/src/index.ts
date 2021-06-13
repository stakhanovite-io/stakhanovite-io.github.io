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
const defaultEpoch = process.env.DEFAULT_EPOCH;
const dataFolder = `${__dirname}/../../assets/public/cardano/data`;

export async function call(input: string, init: RequestInit = {}): Promise<any> {
  return (await fetch(`${baseUrl}/${input}`, {
      method: 'GET',
      headers: {'Project_id': blockfrostProjectId},
      ...init
  })).json();
}

async function callPaged(url: string, count: number = 100, page: number = 1, acc = []): Promise<any> {
  const res = await call(`${url}?page=${page}`);
  const allRes = [...acc, ...res];
  if (res.length == count) {
    return callPaged(url, count, page+1, allRes);
  } else {
    return Promise.resolve(allRes);
  }
}

async function writeBlob(path: string, name: string, json: any): Promise<void> {
  await fs.promises.mkdir(path, {recursive: true});
  fs.promises.writeFile(`${path}/${name}.json`, JSON.stringify(json, null, 2));
}

const csvWriter = createObjectCsvWriter({
  path: 'path/to/file.csv',
  header: [
      {id: 'epochBlock', title: 'EPOCH_PROD'},        
      {id: 'epoch', title: 'EPOCH_PAY'},
      {id: 'date', title: 'DATE_PAY'},
      {id: 'rewards', title: 'ADA_REWARDS'},
      {id: 'priceEUR', title: 'ADA_PRICE_EUR'},
      {id: 'priceUSD', title: 'ADA_PRICE_USD'},
      {id: 'priceYEN', title: 'ADA_PRICE_JPY'}
  ]
});

(async function() {
  // Epoch details

  console.log("Epoch");

  const latest = await call(`epochs/latest`);

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
    const rewards = await callPaged(`accounts/${delegator.address}/rewards`);
    const accountFolder = `${accountsFolder}/${delegator.address}`;
    await writeBlob(accountFolder, 'rewards', rewards);
  }

  // Epochs stakes

  console.log("Stakes");

  const { epoch } = latest;

  const stake = await callPaged(`epochs/${epoch}/stakes/${poolId}`);

  const folder = `${dataFolder}/epochs/${epoch}/stakes/`;
  await writeBlob(folder, ticker, stake);

  const records = [
    {name: 'Bob',  lang: 'French, English'},
    {name: 'Mary', lang: 'English'}
  ];

  await csvWriter.writeRecords(records);
  }().catch(e => {
	  console.error("Failed to start template" ,e)
}));
