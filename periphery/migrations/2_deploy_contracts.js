const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");


module.exports = async function(deployer, network) {
  let weth; 
  const FACTORY_ADDRESS='0x81d5A4d5F4f38E79b16aFEaa7F3bcCC4D875Fec3';
  if(network === 'mainnet'){
    weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
  }
  else{
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }
  deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
