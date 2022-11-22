const { argv } = require("process");
const { relayClient } = require("../../config");

const deleteKey = async () => {
  const [, , relayerId, keyId] = argv;
  const result = await relayClient.deleteKey(relayerId, keyId);

  console.log(result);
};

deleteKey()
  .then(() => console.log("success"))
  .catch(console.error);
