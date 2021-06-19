const {subtask} = require('hardhat/config');
const {TASK_TEST_RUN_MOCHA_TESTS} = require('hardhat/builtin-tasks/task-names');

require('@nomiclabs/hardhat-truffle5');

subtask(TASK_TEST_RUN_MOCHA_TESTS, async function (taskArguments, hre, runSuper) {
  hre.accounts = await hre.web3.eth.getAccounts();
  return runSuper(taskArguments);
});

const chai = require('chai');
chai.should();
chai.use(require('chai-bn')(require('bn.js')));
