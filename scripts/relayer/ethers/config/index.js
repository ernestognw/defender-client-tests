const {
  DefenderRelaySigner,
  DefenderRelayProvider,
} = require("defender-relay-client/lib/ethers");
const { relayerKeys } = require("../../../../config/environment");

const credentials = {
  apiKey: relayerKeys.apiKey,
  apiSecret: relayerKeys.secretKey,
};

const provider = new DefenderRelayProvider(credentials);
const signer = new DefenderRelaySigner(credentials, provider, {
  speed: "fast",
});

module.exports = { provider, signer };
