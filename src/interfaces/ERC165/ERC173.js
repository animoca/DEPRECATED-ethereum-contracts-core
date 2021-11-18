const {makeInterfaceId} = require('@openzeppelin/test-helpers');

const ERC173_Functions = ['owner()', 'transferOwnership(address)'];

module.exports = {
  ERC173: {
    name: 'ERC173',
    functions: ERC173_Functions,
    id: makeInterfaceId.ERC165(ERC173_Functions),
  }, // 0x7f5828d0
};
