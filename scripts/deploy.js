// Import ether hardhat package
const { ethers } = require("hardhat");

async function main() {
    // A ContractFactory in ethers.js is an abstractoin used
    // to deploy new smart contracts, so nftContract here is
    // a factory for instances of our GameItem contract.
    const nftContract = await ethers.getContractFactory("GameItem");

    // deploy the contract
    const deployedNFTContract = await nftContract.deploy();

    // print the address of the deployed contract
    console.log("NFT Contract Address:", deployedNFTContract.address);
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.log(err);
        process.exit(1);
    })