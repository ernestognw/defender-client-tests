const { adminClient } = require("../../../config");

const list = async () => {
  const result = await adminClient.listProposals();
  console.log(result);
};

list()
  .then(() => console.log("success"))
  .catch(console.error);
