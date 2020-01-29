const Gethereum = artifacts.require("Gethereum");

const newOwner = "0x7dd9B933ED8385F473Ff81e9DDc334777f20Bf1f";

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(Gethereum);

  const gethereum = await Gethereum.deployed();

  await gethereum.transferOwnership(newOwner);
};
