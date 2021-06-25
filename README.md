Website for [stakhanovite.io](https://stakhanovite.io)

Make sure you have [yarn](https://yarnpkg.com/) installed.

Then run `yarn` to install all required dependencies.
# Dev

You can run `yarn dev` to start a live dev environment that is accessible via http://localhost:1234 

This will not serve `assets`. To have the full experience, run `yarn build` then `yarn serve`. Changes won't be automatically picked up.
# Build

You can run `yarn dev` to start a live dev environment that is accessible via http://localhost:1234 

## Assets

Assets (CSVs, JSONs) are built periodically via GitHub actions. To manually generate them,  go to `scripts/`.