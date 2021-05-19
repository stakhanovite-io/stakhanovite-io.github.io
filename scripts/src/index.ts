import 'cross-fetch/polyfill';
import fs from 'fs';

// yarn build && POOL_NAME=stkh1 POOL_ID=pool1kchver88u3kygsak8wgll7htr8uxn5v35lfrsyy842nkscrzyvj BLOCKFROST_PROJECT_ID=zyGwYD7iL2fOTWwOfaZ4VK5dPFViUCH8 yarn start

const baseUrl = 'https://cardano-mainnet.blockfrost.io/api/v0/';
const defaultEpoch = process.env.DEFAULT_EPOCH;
const poolId = process.env.POOL_ID;
const blockfrostProjectId = process.env.BLOCKFROST_PROJECT_ID;
const assetsFolder = `${__dirname}/../../public/assets`;

export async function call(input: string, init: RequestInit = {}): Promise<any> {
  return (await fetch(`${baseUrl}/${input}`, {
      method: 'GET',
      headers: {'Project_id': blockfrostProjectId},
      ...init
  })).json();
}

async function callPaged(url: string, page: number = 0, count: number = 100, acc = []) {
  const res = await call(url);
  if (res.length == count) {
    callPaged(url, page++, count, [...acc, ...res]);
  }
}

(async function() {
	const { epoch } = await call(`epochs/latest`);
  //https://docs.blockfrost.io/#tag/Pools/paths/~1pools~1{pool_id}~1metadata/get
	const { ticker } = await call(`pools/${poolId}/metadata`);

	const pool = await call(`pools/${poolId}`);
  console.log(pool);

  const distribution = await call(`epochs/${epoch}/stakes/${poolId}?page=1`);
  console.log(distribution.length);

  // blocks/ID
  // hash, block_vrf

  // /pools/ID/delegators
  // https://docs.blockfrost.io/#tag/Pools/paths/~1pools~1{pool_id}~1delegators/get

 // /epochs/ID/blocks/PID
 // https://docs.blockfrost.io/#tag/Epochs/paths/~1epochs~1{number}~1blocks~1{pool_id}/get

//https://docs.blockfrost.io/#tag/Pools/paths/~1pools~1{pool_id}~1relays/get
//https://docs.blockfrost.io/#tag/Pools/paths/~1pools~1{pool_id}~1delegators/get
//https://docs.blockfrost.io/#tag/Pools/paths/~1pools~1{pool_id}~1blocks/get


// /accounts/ADDR
//https://docs.blockfrost.io/#tag/Accounts
/*

{
"active": true,
"active_epoch": 412,
"controlled_amount": "619154618165",
"rewards_sum": "319154618165",
"withdrawals_sum": "12125369253",
"reserves_sum": "319154618165",
"treasury_sum": "12000000",
"withdrawable_amount": "319154618165",
"pool_id": "pool1pu5jlj4q9w9jlxeu370a3c9myx47md5j5m2str0naunn2q3lkdy"
}
*/

// https://docs.blockfrost.io/#tag/Accounts/paths/~1accounts~1{stake_address}~1rewards/get
// https://docs.blockfrost.io/#tag/Accounts/paths/~1accounts~1{stake_address}~1delegations/get

/*
  const blocks = await call(`epochs/${epoch}/blocks/${poolId}`);
  console.log(blocks.length);

  // https://docs.blockfrost.io/#tag/Pools/paths/~1pools~1{pool_id}~1history/get
  const history = await call(`pools/${poolId}/history`);
  console.log(history);
*/

  const folder = `${assetsFolder}/${ticker}/stakes/`;
  await fs.promises.mkdir(folder, {recursive: true});
  await fs.promises.writeFile(`${folder}/${epoch}.json`, JSON.stringify(distribution, null, 2));
  }().catch(e => {
	  console.error("Failed to start template" ,e)
}));

