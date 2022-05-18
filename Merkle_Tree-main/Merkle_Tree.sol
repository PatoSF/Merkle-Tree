// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MerkleTreeExample {
    // --- PROPERTIES ---- //

    // Calculated from `merkle_tree.js`
    bytes32 public merkleRoot =
        0xe1c538987ad6ff91de3ffadf60c2c91c84e248867b399cadede06ac9ac46d5b2;

    mapping(address => bool) public whitelistClaimed;

    // --- FUNCTIONS ---- //
    function whitelistMint(bytes32[] calldata _merkleProof) public {
        require(!whitelistClaimed[msg.sender], "Address already claimed");
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(_merkleProof, merkleRoot, leaf),
            "Invalid Merkle Proof."
        );
        whitelistClaimed[msg.sender] = true;
    }
}
