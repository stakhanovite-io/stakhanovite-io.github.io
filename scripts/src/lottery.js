// https://github.com/GoogleChromeLabs/jsbi#why
// https://drand.love/developer/http-api/#public-endpoints
// https://github.com/drand/drand-client#usage
// https://api.drand.sh/public/latest and https://api.drand.sh/public/1234

import Client, { HTTP } from 'drand-client'
import fetch from 'node-fetch'
import AbortController from 'abort-controller'

global.fetch = fetch
global.AbortController = AbortController

const epoch = process.argv[2];
const path = `./public/assets/${pool}/delegators/${epoch}.json`;

var fs = require('fs');


// 1 vote pour chaque delegators > 500

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}


const chainHash = '8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce' // (hex encoded)
const urls = [
  'https://api.drand.sh',
  'https://drand.cloudflare.com'
];

async function main() {
    const options = { chainHash };

    const client = await Client.wrap(HTTP.forURLs(urls, chainHash), options)

    // e.g. use the client to get the latest randomness round:
    const res = await client.get()

    console.log(res.round, res.randomness);

    const totalPoints = 1000;
    const index = parseInt(res.randomness) % 1000;
    console.log(index);
}

main();