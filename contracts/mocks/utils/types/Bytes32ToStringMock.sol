// SPDX-License-Identifier: MIT

pragma solidity >=0.7.6 <0.8.0;

import {Bytes32ToBase32String} from "../../../utils/types/Bytes32ToBase32String.sol";

library Bytes32ToStringMock {
    using Bytes32ToBase32String for bytes32;

    function toBase32String(bytes32 _hash) external pure returns (string memory s) {
        s = _hash.toBase32String();
    }
}
