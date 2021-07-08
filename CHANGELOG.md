# Changelog

## 1.1.0

### New features
 * Added `ERC20Wrapper.sol` library to manage function calls to non-standard ERC20 implementations (functions not returning a bool value).

### Improvements
 * `Recoverable.sol` uses `ERC20Wrapper.sol` for ERC20.transfer function calls.
 * Remove unnecessary function visibility fix in `ManagedIdentity.sol`.

## 1.0.0
 * Initial commit.
