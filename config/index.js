const { Relayer } = require("defender-relay-client");
const { SentinelClient } = require("defender-sentinel-client");
const { AutotaskClient } = require("defender-autotask-client");
const { relayerKeys, apiKeys } = require("./environment");

const relayer = new Relayer({
  apiKey: relayerKeys.apiKey,
  apiSecret: relayerKeys.secretKey,
});

const sentinel = new SentinelClient({
  apiKey: apiKeys.apiKey,
  apiSecret: apiKeys.secretKey,
});

const autotask = new AutotaskClient({
  apiKey: apiKeys.apiKey,
  apiSecret: apiKeys.secretKey,
});

module.exports = { relayer, sentinel, autotask };
