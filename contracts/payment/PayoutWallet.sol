// SPDX-License-Identifier: MIT

pragma solidity >=0.7.6 <0.8.0;

import {ManagedIdentity} from "../metatx/ManagedIdentity.sol";
import {Ownable} from "../access/Ownable.sol";

/**
    @title PayoutWallet
    @dev adds support for a payout wallet
    Note: .
 */
abstract contract PayoutWallet is ManagedIdentity, Ownable {
    event PayoutWalletSet(address payoutWallet_);

    address payable public payoutWallet;

    constructor(address owner, address payable payoutWallet_) Ownable(owner) {
        require(payoutWallet_ != address(0), "Payout: zero address");
        payoutWallet = payoutWallet_;
        emit PayoutWalletSet(payoutWallet_);
    }

    function setPayoutWallet(address payable payoutWallet_) public {
        _requireOwnership(_msgSender());
        require(payoutWallet_ != address(0), "Payout: zero address");
        payoutWallet = payoutWallet_;
        emit PayoutWalletSet(payoutWallet);
    }
}
