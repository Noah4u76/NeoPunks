const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const NeoPunksNFT = await hre.ethers.getContractFactory("NeoPunksNFT");
  const neoPunksNFT = await NeoPunksNFT.deploy(unlockTime, {
    value: lockedAmount,
  });

  await neoPunksNFT.deployed();

  console.log(
    `NeoPunksNFT with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${neoPunksNFT.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
