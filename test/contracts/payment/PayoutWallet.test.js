const {artifacts, accounts} = require('hardhat');
const {expectEvent, expectRevert} = require('@openzeppelin/test-helpers');
const {ZeroAddress} = require('../../../src/constants');

const PayoutWallet = artifacts.require('PayoutWalletMock');

describe('PayoutWallet', function () {
  const [creator, other, payoutWallet, otherPayoutWallet, ...otherAccounts] = accounts;

  beforeEach(async function () {
    this.contract = await PayoutWallet.new(payoutWallet, {from: creator});
  });

  it('should fail if not sent by the owner', async function () {
    await expectRevert(this.contract.setPayoutWallet(otherPayoutWallet, {from: other}), 'Ownable: not the owner');
  });

  it('should fail if setting to the zero address', async function () {
    await expectRevert(this.contract.setPayoutWallet(ZeroAddress, {from: creator}), 'Payout: zero address');
  });

  it('should update the payout wallet', async function () {
    let current = await this.contract.payoutWallet();
    current.should.be.equal(payoutWallet);
    const receipt = await this.contract.setPayoutWallet(otherPayoutWallet, {from: creator});
    current = await this.contract.payoutWallet();
    current.should.be.equal(otherPayoutWallet);
    expectEvent(receipt, 'PayoutWalletSet', {payoutWallet_: otherPayoutWallet});
  });
});
