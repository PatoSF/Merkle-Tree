## Install npm packages

[`npm install merkletreejs`](https://github.com/miguelmota/merkletreejs#cdn)

[`npm install keccak256`](https://www.npmjs.com/package/keccak256)
## Run program (root of repo)

`node merkle_tree.js`

If the address we want to check is the second address in the whitelistAddresses array, 
 we get its neighbours with this phrase const claimingAddress = leafNodes[1];
 We then take the array of addresses from example: 
[   
"0x4bf4441b255ebeaf49539cf2e7616e4011defd8c0e88dae4fa0d066812cd1303",  
"0x5921dabcfd25c152cf3be9d018c964c7231c435d43cfbe90cb4e52fff7479990",   
"0x5bcb28ffafaabd9bbb6777eec6f3985eee8f03d9ee3f8d9e2c4c4d0bf427b379",  
"0x6c852e1175825765a199a995fcf08f90ccda4c052f45f7ef95a65e5f97f50723"
]
and paste it the whitelistMint function after deploying the contract.
If we change addresses (msg.sender), the contract will throw an error.

## Solidity Version

```json
    Pass this array in for 'bytes32[] calldata _merkleProof' to whitelistMint()
    👋 CHANGE SINGLE QUOTES TO DOUBLE QUOTES
        '0Xaddr' -> "0xaddr"

    [
        "0x702d0f86c1baf15ac2b8aae489113b59d27419b751fbf7da0ef0bae4688abc7a",
        "0xb159efe4c3ee94e91cc5740b9dbb26fc5ef48a14b53ad84d591d0eb3d65891ab"
    ]

```