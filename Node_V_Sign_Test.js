import * as fs from "fs";
import path from "path";
import { FireblocksSDK } from "fireblocks-sdk";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log(__dirname);
apiSecret = fs.readFileSync(
  path.resolve(__dirname, "./fireblocks_secret.key"),
  "utf8"
);
// const apiKey = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
// fireblocks = new FireblocksSDK(apiSecret, apiKey);
