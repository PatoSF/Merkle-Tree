// 1. Import libraries. Use `npm` package manager to install
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

// 2. Collect list of wallet addresses from competition, raffle, etc.
// Store list of addresses in some data sheet (Google Sheets or Excel).
let whitelistAddresses = [
  "0x8B47ED08FD5f134c57B826FbD33E1dE121De880d",
  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
  "0xF3396134a8CF78cd8A5829AD35285B0c6Bb50FD5",
  "0xc7EAC10bDa0Ba2C409A4245E201DbcE9D110Ff01",
  "0x00Da76a93e5E28e6A9398F029B095B4CEd6E8E75",
  "0x75688e9036c6838322ca1a5d59f0e843ecb241d9",
  "0x7ad2cb81af992b0ec215bead9de9c8be5e35f24b",
  "0xf16e9b0d03470827a95cdfd0cb8a8a3b46969b91",
  "0xdb2f789f4637490acb76118f0384e09a86a3d9c1"
];

// 3. Create a new array of `leafNodes` by hashing all indexes of the `whitelistAddresses`
// using `keccak256`. Then creates a Merkle Tree object using keccak256 as the algorithm.
// The leaves, merkleTree, and rootHash are all PRE-DETERMINED prior to whitelist claim
const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

//console.log(leafNodes);
//console.log(merkleTree);

// 4. Get root hash of the `merkleeTree` in hexadecimal format (0x)
// Print out the Entire Merkle Tree.
const rootHash = merkleTree.getRoot();
console.log("Whitelist Merkle Tree\n", merkleTree.toString());
console.log("Root Hash: ", rootHash);

// CLIENT-SIDE: Use `msg.sender` address to query and API that returns the merkle proof
// required to derive the root hash of the Merkle Tree
// ✅ Positive verification of address
const claimingAddress = leafNodes[1];
// ❌ Change this address to get a `false` verification
//const claimingAddress = "0x00Da76a93e5E28e6A9398F49fB095B4CEd6E8E75";

// `getHexProof` returns the neighbour leaf and all parent nodes hashes that will
// be required to derive the Merkle Trees root hash.
const hexProof = merkleTree.getHexProof(claimingAddress);
console.log(hexProof);

// ✅ - ❌: Verify is claiming address is in the merkle tree or not.
// This would be implemented in your Solidity Smart Contract
console.log(merkleTree.verify(hexProof, claimingAddress, rootHash));
