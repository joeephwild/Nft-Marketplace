require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config({path: '.env'})

const  ALCHEMY_URL = process.env. ALCHEMY_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat:{},
    matic: {
      url: ALCHEMY_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};
