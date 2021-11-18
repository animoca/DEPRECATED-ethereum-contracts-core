function shouldSupportInterfaces(interfaces, maxGas = 25000) {
  describe('ERC165 supportsInterface(bytes4)', function () {
    beforeEach(function () {
      this.contract = this.contract || this.mock || this.token;
    });

    for (const interface of interfaces) {
      describe(interface.name, function () {
        it('is supported', async function () {
          (await this.contract.supportsInterface(interface.id)).should.equal(true);
        });

        it(`should use less than ${maxGas} gas [ @skip-on-coverage ]`, async function () {
          (await this.contract.supportsInterface.estimateGas(interface.id)).should.be.lte(maxGas);
        });
      });
    }
  });
}

module.exports = {
  shouldSupportInterfaces,
};
