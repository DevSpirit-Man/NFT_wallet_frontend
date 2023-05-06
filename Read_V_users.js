const fs = require("fs");
const path = require("path");
const { FireblocksSDK } = require("fireblocks-sdk");
const { exit } = require("process");
const { inspect } = require("util");
require("dotenv").config();
console.log(process.env.FIREBLOCKS_API_PRIVATE_KEY_PATH);
console.log(process.env.FIREBLOCKS_API_KEY);
console.log(process.env.BASEURL);
const apiSecret = fs.readFileSync(
  path.resolve(process.env.FIREBLOCKS_API_PRIVATE_KEY_PATH),
  "utf8"
);
const apiKey = process.env.FIREBLOCKS_API_KEY;
// Choose the right api url for your workspace type
const baseUrl = process.env.BASEURL;
const fireblocks = new FireblocksSDK(apiSecret, apiKey, baseUrl);

(async () => {
  // Print vaults before creation
  let vaultAccounts = await fireblocks.getVaultAccountsWithPageInfo({});
  console.log(inspect(vaultAccounts, false, null, true));
})().catch((e) => {
  console.error(`Failed: ${e}`);
  exit(-1);
});
