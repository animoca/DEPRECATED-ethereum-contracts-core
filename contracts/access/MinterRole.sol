// SPDX-License-Identifier: MIT

pragma solidity >=0.7.6 <0.8.0;

import {Ownable} from "./Ownable.sol";

/**
 * Contract which allows derived contracts access control over token minting operations.
 */
contract MinterRole is Ownable {
    event MinterAdded(address indexed account);
    event MinterRemoved(address indexed account);

    mapping(address => bool) public isMinter;

    /**
     * Constructor.
     */
    constructor(address owner_) Ownable(owner_) {
        _addMinter(owner_);
    }

    /**
     * Grants the minter role to a non-minter.
     * @dev reverts if the sender is not the contract owner.
     * @param account The account to grant the minter role to.
     */
    function addMinter(address account) public {
        _requireOwnership(_msgSender());
        _addMinter(account);
    }

    /**
     * Renounces the granted minter role.
     * @dev reverts if the sender is not a minter.
     */
    function renounceMinter() public {
        address account = _msgSender();
        _requireMinter(account);
        isMinter[account] = false;
        emit MinterRemoved(account);
    }

    function _requireMinter(address account) internal view {
        require(isMinter[account], "MinterRole: not a Minter");
    }

    function _addMinter(address account) internal {
        isMinter[account] = true;
        emit MinterAdded(account);
    }
}
