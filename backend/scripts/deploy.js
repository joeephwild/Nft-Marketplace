const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
    const {deployer} = await ethers.getSigners();
    const balance = await deployer.getbalance();
    const ANENFT = await hre.ethers.getContractFactory("ANENFT");
    const aneNft = await ANENFT.deploy();

    await aneNft.deployed();

    console.log(`deployed to ${aneNft.address}`)
}

main()
.then(() => process.exitCode(0))
.catch((error) => {
    console.error(error);
    process.exitCode = 1;
});