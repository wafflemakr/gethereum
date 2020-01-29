const Etrix = artifacts.require("Etrix");

const newOwner = "0x7dd9B933ED8385F473Ff81e9DDc334777f20Bf1f";

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(Etrix);

  const etrix = await Etrix.deployed();

  await etrix.transferOwnership(newOwner);
};
