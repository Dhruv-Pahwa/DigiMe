require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
const privateKey = fs.readFileSync("secrete.txt").toString();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
 defaultNetwork: 'localhost',
 networks: {
   hardhat: {
     chainId: 1029,
   },
   BitTorrent: {
     url:'https://pre-rpc.bt.io/',
     accounts: [privateKey],
     gasPrice: 1000000000,
   },
 },
  solidity: "0.8.24",
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
  loggingEnabled: true,
};

//0x5FbDB2315678afecb367f032d93F642f64180aa3
