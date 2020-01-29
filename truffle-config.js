const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const providerFactory = network => {
  if (process.env.PRIVATE_KEY)
    return new HDWalletProvider(
      process.env.PRIVATE_KEY,
      `https://${network}.infura.io/v3/${process.env.INFURA_KEY}`
    );

  return new HDWalletProvider(
    process.env.MNEMONICS,
    `https://${network}.infura.io/v3/${process.env.INFURA_KEY}`,
    0,
    20
  );
};

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 999,
      gasPrice: 5000000000 // 5 Gwei
    },
    mainnet: {
      provider: () => providerFactory("mainnet"),
      network_id: 1,
      gas: 7000000,
      gasPrice: 5000000000 // 5 Gwei
    },
    rinkeby: {
      provider: () => providerFactory("rinkeby"),
      network_id: 4,
      gas: 6900000,
      gasPrice: 10000000000 // 10 Gwei
    }
  },
  compilers: {
    solc: {
      version: "0.5.11",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
