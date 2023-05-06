import * as fs from "fs";
import { path } from "path";
import {
  FireblocksSDK,
  PeerType,
  TransactionArguments,
  TransactionOperation,
  TransactionStatus,
} from "fireblocks-sdk";

apiSecret = fs.readFileSync(
  path.resolve(__dirname, "./fireblocks_secret.key"),
  "utf8"
);
const apiKey = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
fireblocks = new FireblocksSDK(apiSecret, apiKey);
