// SPDX-License-Identifier: MIT

pragma solidity >=0.7.6 <0.8.0;

import {Ownable} from "./Ownable.sol";

/**
 * Contract which allows derived contracts access control over token minting operations.
 */
contract PauserRole is Ownable {
    event PauserAdded(address indexed account);
    event PauserRemoved(address indexed account);

    mapping(address => bool) public isPauser;

    /**
     * Constructor.
     */
    constructor(address owner_) Ownable(owner_) {
        _addPauser(owner_);
    }

    /**
     * Grants the pauser role to a non-pauser.
     * @dev reverts if the sender is not the contract owner.
     * @param account The account to grant the pauser role to.
     */
    function addPauser(address account) public {
        _requireOwnership(_msgSender());
        _addPauser(account);
    }

    /**
     * Renounces the granted pauser role.
     * @dev reverts if the sender is not a pauser.
     */
    function renouncePauser() public {
        address account = _msgSender();
        _requirePauser(account);
        isPauser[account] = false;
        emit PauserRemoved(account);
    }

    function _requirePauser(address account) internal view {
        require(isPauser[account], "PauserRole: not a Pauser");
    }

    function _addPauser(address account) internal {
        isPauser[account] = true;
        emit PauserAdded(account);
    }
}
