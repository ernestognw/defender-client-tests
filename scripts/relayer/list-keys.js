const { argv } = require("process");
const { relayClient } = require("../../config");

const listKeys = async () => {
  const relayerId = argv[2];
  const result = await relayClient.listKeys(relayerId);

  console.log(result);
};

listKeys()
  .then(() => console.log("success"))
  .catch(console.error);
