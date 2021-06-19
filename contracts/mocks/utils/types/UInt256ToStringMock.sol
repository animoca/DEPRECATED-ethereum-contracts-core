// SPDX-License-Identifier: MIT

pragma solidity >=0.7.6 <0.8.0;

import {UInt256ToDecimalString} from "../../../utils/types/UInt256ToDecimalString.sol";
import {UInt256ToHexString} from "../../../utils/types/UInt256ToHexString.sol";

library UInt256ToStringMock {
    using UInt256ToDecimalString for uint256;
    using UInt256ToHexString for uint256;

    function toDecimalString(uint256 value) external pure returns (string memory result) {
        result = value.toDecimalString();
    }

    function toHexString(uint256 value) external pure returns (string memory result) {
        result = value.toHexString();
    }
}
