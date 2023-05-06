require("dotenv").config({ path: require("find-config")(".env") }); // require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { FireblocksSDK } = require("fireblocks-sdk");
const { exit } = require("process");
const { inspect } = require("util");

// const apiSecret = fs.readFileSync(
//   path.resolve(process.env.REACT_APP_FIREBLOCKS_API_PRIVATE_KEY_PATH),
//   "utf8"
// );
const privatekey = process.env.REACT_APP_FIREBLOCKS_API_PRIVATE_KEY_VALUE;

const apiKey = process.env.REACT_APP_FIREBLOCKS_API_KEY;
// Choose the right api url for your workspace type
const baseUrl = process.env.BASEURL;
const fireblocks = new FireblocksSDK(privatekey, apiKey, baseUrl);
console.log(typeof privatekey);
