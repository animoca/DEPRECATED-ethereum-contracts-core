module.exports = {
  networks: {
    hardhat: {
      // this is a workaround for running coverage
      // https://github.com/sc-forks/solidity-coverage/issues/652
      initialBaseFeePerGas: 0,
    },
    coverage: {
      url: 'http://localhost:5458',
    },
  },
};
