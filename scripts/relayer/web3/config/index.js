const { DefenderRelayProvider } = require("defender-relay-client/lib/web3");
const Web3 = require("web3");
const { relayerKeys } = require("../../../../config/environment");

const credentials = {
  apiKey: relayerKeys.apiKey,
  apiSecret: relayerKeys.secretKey,
};

const provider = new DefenderRelayProvider(credentials, { speed: "fast" });
const web3 = new Web3(provider);

module.exports = { web3 };
