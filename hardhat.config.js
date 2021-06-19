const merge = require('lodash.merge');

require('@animoca/ethereum-hardhat-bootstrap/hardhat-plugins');
module.exports = merge(require('./hardhat.config.template'), require('@animoca/ethereum-hardhat-bootstrap').loadConfig());
