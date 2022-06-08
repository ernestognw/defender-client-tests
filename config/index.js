const { Relayer, RelayClient } = require("defender-relay-client");
const { SentinelClient } = require("defender-sentinel-client");
const { AutotaskClient } = require("defender-autotask-client");
const { relayerKeys, apiKeys } = require("./environment");

const relayer = new Relayer({
  apiKey: relayerKeys.apiKey,
  apiSecret: relayerKeys.secretKey,
});

const relayClient = new RelayClient({
  apiKey: apiKeys.apiKey,
  apiSecret: apiKeys.secretKey,
});

const sentinelClient = new SentinelClient({
  apiKey: apiKeys.apiKey,
  apiSecret: apiKeys.secretKey,
});

const autotaskClient = new AutotaskClient({
  apiKey: apiKeys.apiKey,
  apiSecret: apiKeys.secretKey,
});

module.exports = { relayer, relayClient, sentinelClient, autotaskClient };
