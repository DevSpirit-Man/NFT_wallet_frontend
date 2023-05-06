async function createVaultAccounts(
  amountOfVaultAccounts,
  assetId,
  vaultAccountNamePrefix
) {
  let vaultRes;
  let vault;
  let vaultWallet;

  for (let i = 1; i <= amountOfVaultAccounts; i++) {
    vaultRes = await fireblocks.createVaultAccount(
      vaultAccountNamePrefix.toString() + i.toString()
    );
    vault = {
      vaultName: vaultRes.name,
      vaultID: vaultRes.id,
    };
    vaultWallet = await fireblocks.createVaultAsset(
      Number(vault.vaultID),
      assetId
    );

    console.log("Vault Account Details:", vault);
    console.log("Wallet Asset Details for ", vault.vaultName, ":", vaultWallet);
  }
}
createVaultAccounts(3, "ETH", "END-USER#");
