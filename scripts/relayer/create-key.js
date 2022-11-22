const { argv } = require("process");
const { relayClient } = require("../../config");

const createKey = async () => {
  const relayerId = argv[2];
  const result = await relayClient.createKey(relayerId);

  console.log(result);
};

createKey()
  .then(() => console.log("success"))
  .catch(console.error);
