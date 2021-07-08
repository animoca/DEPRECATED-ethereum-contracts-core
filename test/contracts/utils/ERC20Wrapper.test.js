const {artifacts, accounts} = require('hardhat');
const {expectEvent, expectRevert} = require('@openzeppelin/test-helpers');
const {Zero} = require('../../../src/constants');

const ERC20WrapperTest = artifacts.require('ERC20WrapperTest');

describe('ERC20Wrapper', function () {
  const [deployer, other] = accounts;

  beforeEach(async function () {
    this.contract = await ERC20WrapperTest.new();
  });

  context('with a standard ERC20 implementation', function () {
    it('should not revert when calling transfer', async function () {
      await this.contract.standardTransfer(other, Zero);
    });

    it('should not revert when calling transferFrom', async function () {
      await this.contract.standardTransferFrom(other, other, Zero);
    });

    it('should not revert when calling approve', async function () {
      await this.contract.standardApprove(other, Zero);
    });
  });

  context('with a non-standard ERC20 implementation', function () {
    it('should not revert when calling transfer', async function () {
      await this.contract.nonStandardTransfer(other, Zero);
    });

    it('should not revert when calling transferFrom', async function () {
      await this.contract.nonStandardTransferFrom(other, other, Zero);
    });

    it('should not revert when calling approve', async function () {
      await this.contract.nonStandardApprove(other, Zero);
    });
  });

  context('with a failing ERC20 implementation', function () {
    it('should revert when calling transfer', async function () {
      await expectRevert(this.contract.failingTransfer(other, Zero), 'ERC20Wrapper: operation failed');
    });

    it('should revert when calling transferFrom', async function () {
      await expectRevert(this.contract.failingTransferFrom(other, other, Zero), 'ERC20Wrapper: operation failed');
    });

    it('should revert when calling approve', async function () {
      await expectRevert(this.contract.failingApprove(other, Zero), 'ERC20Wrapper: operation failed');
    });
  });

  context('with a reverting ERC20 implementation', function () {
    it('should revert when calling transfer', async function () {
      await expectRevert(this.contract.revertingTransfer(other, Zero), 'ERC20Wrapper: operation failed');
    });

    it('should revert when calling transferFrom', async function () {
      await expectRevert(this.contract.revertingTransferFrom(other, other, Zero), 'ERC20Wrapper: operation failed');
    });

    it('should revert when calling approve', async function () {
      await expectRevert(this.contract.revertingApprove(other, Zero), 'ERC20Wrapper: operation failed');
    });
  });

  context('with a reverting with message ERC20 implementation', function () {
    it('should revert when calling transfer', async function () {
      await expectRevert(this.contract.revertingWithMessageTransfer(other, Zero), 'reverted');
    });

    it('should revert when calling transferFrom', async function () {
      await expectRevert(this.contract.revertingWithMessageTransferFrom(other, other, Zero), 'reverted');
    });

    it('should revert when calling approve', async function () {
      await expectRevert(this.contract.revertingWithMessageApprove(other, Zero), 'reverted');
    });
  });

  context('with a non-contract ERC20', function () {
    it('should revert when calling transfer', async function () {
      await expectRevert(this.contract.nonContractTransfer(other, Zero), 'ERC20Wrapper: non-contract');
    });

    it('should revert when calling transferFrom', async function () {
      await expectRevert(this.contract.nonContractTransferFrom(other, other, Zero), 'ERC20Wrapper: non-contract');
    });

    it('should revert when calling approve', async function () {
      await expectRevert(this.contract.nonContractApprove(other, Zero), 'ERC20Wrapper: non-contract');
    });
  });
});
