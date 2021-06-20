# Solidity Project Contracts Core Library

This project serves as a base dependency for Solidity-based smart contract projects by providing common dependencies, configurations, contracts, scripts, interfaces, constants, and testing utilities.

This project uses hardhat and augments it with a set of plugins aimed at providing a comprehensive and robust development and testing pipeline.

## Table of Contents

- [Overview](#overview)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Commands](#commands)
    - [Solidity Contracts](#solidity-contracts)
    - [Test and Migration Scripts](#test-and-migration-scripts)

## Overview

### Installation

Install as a module dependency in your host NodeJS project:

```bash
npm install @animoca/ethereum-contracts-core --save-dev
npm install hardhat --save-dev
```

or

```bash
yarn add -D @animoca/ethereum-contracts-core
yarn add -D hardhat
```

### Usage
#### Commands

```bash
yarn
yarn run-all
```

See package.json scripts for detailed commands.

#### Solidity Contracts

Import dependency contracts into your Solidity contracts and derive as needed:

```solidity
import "@animoca/ethereum-contracts-core/contracts/{{Contract Group}}/{{Contract}}.sol"
```

#### Test and Migration Scripts

Require the NodeJS module dependency in your test and migration scripts as needed:

```javascript
const { constants, interfaces, behaviors } = require("@animoca/ethereum-contracts-core");
```
