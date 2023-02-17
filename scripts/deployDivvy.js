const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const NftRent = await hre.ethers.getContractFactory("NFTRent");
  const nftRent = await NftRent.deploy();

  await nftRent.deployed();

  console.log("Contract deployed to:", nftRent.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
