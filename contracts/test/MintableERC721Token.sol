pragma solidity ^0.4.18;

import "openzeppelin-zos/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-zos/contracts/token/ERC721/ERC721Mintable.sol";

/**
 * This implementation of the ERC721 standard allows us to deploy a test ERC721 contract and mint
 * non-fungible tokens that we can use in a test environment.
 */
contract MintableERC721Token is ERC721Full, ERC721Mintable {
    function initialize(address _sender) public initializer {
        ERC721Full.initialize("MintableERC721Token", "MET");
        ERC721Mintable.initialize(_sender);
    }
}
