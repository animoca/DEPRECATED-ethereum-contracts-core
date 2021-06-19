// SPDX-License-Identifier: MIT

pragma solidity >=0.7.6 <0.8.0;

import {PayoutWallet} from "../../payment/PayoutWallet.sol";

contract PayoutWalletMock is PayoutWallet {
    constructor(address payable payoutWallet_) PayoutWallet(msg.sender, payoutWallet_) {}
}
