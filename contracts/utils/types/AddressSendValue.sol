// SPDX-License-Identifier: MIT

// Partially derived from OpenZeppelin:
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/406c83649bd6169fc1b578e08506d78f0873b276/contracts/utils/Address.sol

pragma solidity >=0.7.6 <0.8.0;

/**
 * @dev Upgrades the address type to use sendValue instead of transfer.
 */
library AddressSendValue {
    /**
     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to
     * `recipient`, forwarding all available gas and reverting on errors.
     *
     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
     * of certain opcodes, possibly making contracts go over the 2300 gas limit
     * imposed by `transfer`, making them unable to receive funds via
     * `transfer`. {sendValue} removes this limitation.
     *
     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].
     *
     * IMPORTANT: because control is transferred to `recipient`, care must be
     * taken to not create reentrancy vulnerabilities.
     */
    function sendValue(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, "Address: insufficient balance");

        // solhint-disable-next-line avoid-low-level-calls, avoid-call-value
        (bool success, ) = recipient.call{value: amount}("");
        require(success, "Address: unable to send value");
    }
}
