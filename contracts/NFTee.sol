// SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.0;

// Import openzepplin contract
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// GameItem in ERC721 signifies that the contract 
// we are creating and imports ERC721 and follows ERC721 
// contract from openzepplin
contract GameItem is ERC721 {
    constructor()
    ERC721("GameItem", "ITM") {
        // Mint NFT to yourself
        _mint(msg.sender, 1);
    }
}