const fs = require("fs");
const path = require("path");
const { FireblocksSDK } = require("fireblocks-sdk");
const { exit } = require("process");
const { inspect } = require("util");

const apiSecret = fs.readFileSync(
  path.resolve("</path/to/fireblocks_secret.key>"),
  "utf8"
);
const apiKey = "<your-api-key-here>";
// Choose the right api url for your workspace type
const baseUrl = "https://sandbox-api.fireblocks.io";
const fireblocks = new FireblocksSDK(apiSecret, apiKey, baseUrl);

(async () => {
  // Print vaults before creation
  let vaultAccounts = await fireblocks.getVaultAccountsWithPageInfo({});
  console.log(inspect(vaultAccounts, false, null, true));

  // Create vault account
  const vaultCreation = await fireblocks.createVaultAccount("QuickStart_Vault");
  console.log(inspect(vaultCreation, false, null, true));

  // Print vaults after creation
  vaultAccounts = await fireblocks.getVaultAccountsWithPageInfo({});
  console.log(inspect(vaultAccounts, false, null, true));
})().catch((e) => {
  console.error(`Failed: ${e}`);
  exit(-1);
});
