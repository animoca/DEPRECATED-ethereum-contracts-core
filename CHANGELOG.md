# Changelog

## 1.1.2

### Bugfixes
 * Workaround config on the hardhat network to prevent gas price errors while running coverage on the london hardfork (EIP-1559).

### Improvements
 * Updated dependencies to latest versions.

## 1.1.1

### Improvements
 * Updated dependencies to latest versions.

## 1.1.0

### New features
 * Added `ERC20Wrapper.sol` library to manage function calls to non-standard ERC20 implementations (functions not returning a bool value).

### Improvements
 * `Recoverable.sol` uses `ERC20Wrapper.sol` for ERC20.transfer function calls.
 * Remove unnecessary function visibility fix in `ManagedIdentity.sol`.

## 1.0.0
 * Initial commit.
