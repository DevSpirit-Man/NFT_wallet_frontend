const express = require("express");
const path = require("path");
const app = express(); // create express app
require("dotenv").config({ path: require("find-config")(".env") }); // require("dotenv").config();
const fs = require("fs");
const { FireblocksSDK } = require("fireblocks-sdk");
const { exit } = require("process");
const { inspect } = require("util");
const privatekey = process.env.REACT_APP_FIREBLOCKS_API_PRIVATE_KEY_VALUE;

const apiKey = process.env.REACT_APP_FIREBLOCKS_API_KEY;
// Choose the right api url for your workspace type
const baseUrl = process.env.BASEURL;
const fireblocks = new FireblocksSDK(privatekey, apiKey, baseUrl);
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

async function listofvault() {
  // Print vaults before creation
  let vaultAccounts = await fireblocks.getVaultAccountsWithPageInfo({
    // assetId: "MATIC_POLYGON_MUMBAI",
  });
  console.log(typeof vaultAccounts);
  return vaultAccounts;
}

async function createVaultWallet(assetId){

  let vaultWallet;

  vaultWallet = await fireblocks.createVaultAsset(Number(7), assetId);
  
  console.log("Wallet Asset Details for ", vaultWallet);
  
  return vaultWallet
}

async function asset_addresses_balance(vID) {
  const vaultAccountId = vID;
  const assetId = "MATIC_POLYGON_MUMBAI";
  const vaultAsset = await fireblocks.getVaultAccountAsset(
    vaultAccountId,
    assetId
  );
  const depositAddresses = await fireblocks.getDepositAddresses(
    vaultAccountId,
    assetId
  );
  return [vaultAsset, depositAddresses];
}

async function createTransaction_FVTV(assetId, amount, srcId, destId){ 
  let payload = {
      assetId,
      amount,
      source: {
          type: "VAULT_ACCOUNT",
          id: String(srcId)
      },
      destination: {
          type: "VAULT_ACCOUNT",
          id: String(destId)
      },
      note: "Your first transaction!"
  };
  const result = await fireblocks.createTransaction(payload);
  console.log(JSON.stringify(result, null, 2));
}

async function createTransaction_FVFO(assetId, amount, srcId, address){
  let payload = {
      assetId,
      amount,
      source: {
          type: "VAULT_ACCOUNT", 
          id: String(srcId)
      },
      destination: {
          type: "ONE_TIME_ADDRESS",
          oneTimeAddress: {
              address: String(address)
          }
      },
      note: "Your first OTA transaction!"
  };
 const result = await fireblocks.createTransaction(payload);
 console.log(JSON.stringify(result, null, 2));
}

app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to CORS server 😁");
});
// Create A Wallet
app.get("/createVaultWallet", (req, res) => {
  createVaultWallet("MATIC_POLYGON_MUMBAI").then(response =>{
    console.log(response)
    res.send(response)
  })
});

// GET List of ALL Vaults accounts
app.get("/listofvaults", (req, res) => {
  
  listofvault().then((returnval) => {

    console.log(typeof returnval);
    res.send(returnval);
  });
});

// Read Wallet address and balance based on VaultID and AssetID
app.get("/asset_addresses_balance", (req, res) => {
  const vaultID = req.query.vaultID;
  console.log("Current Vault ID : "+ vaultID);
  asset_addresses_balance(vaultID).then((returnval) => {

    res.send(returnval);
  });
});

app.post("/send_transaction_FVTV", (req, res) => {
  const fromAddress = req.body.fromAddress;
  const sendAddress = req.body.sendAddress;
  const cryptoBalance = req.body.cryptoBalance;
  
  createTransaction_FVTV("MATIC_POLYGON_MUMBAI", cryptoBalance, fromAddress, sendAddress).then((response) => {
    
    console.log(req.body);
    res.send(response)
  });
});


app.post("/createTransaction_FVFO", (req, res) => {
  
  
  createTransaction_FVFO("MATIC_POLYGON_MUMBAI", "0.001", "5", "0xdb7DFa0FD980E92815d77f71942fFb61B973CfE1").then((response) => {

    res.send(response)
  });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
