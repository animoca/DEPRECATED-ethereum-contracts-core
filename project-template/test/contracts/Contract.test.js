const {artifacts, accounts} = require('hardhat');
const {shouldBehaveLikeEmptyContract} = require('./Contract.empty.behavior');

const Contract = artifacts.require('Contract');

describe('Contract', function () {
  const [deployer, ...otherAccounts] = accounts;

  beforeEach(async function () {
    this.contract = await Contract.new({from: deployer});
  });

  shouldBehaveLikeEmptyContract();
});
