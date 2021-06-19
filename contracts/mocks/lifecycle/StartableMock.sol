// SPDX-License-Identifier: MIT

pragma solidity >=0.7.6 <0.8.0;

import {Startable} from "../../lifecycle/Startable.sol";

contract StartableMock is Startable {
    constructor() {}

    function start() external {
        _start();
    }

    function testWhenStarted() external view whenStarted {}

    function testWhenNotStarted() external view whenNotStarted {}
}
