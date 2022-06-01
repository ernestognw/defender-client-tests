const dotenv = require("dotenv");

dotenv.config();

const relayerKeys = {
  apiKey: process.env.RELAYER_API_KEY,
  secretKey: process.env.RELAYER_SECRET_KEY,
};

const apiKeys = {
  apiKey: process.env.API_KEY,
  secretKey: process.env.SECRET_KEY,
};

module.exports = { relayerKeys, apiKeys };
