const { argv } = require("process");
const { adminClient } = require("../../../config");

const get = async () => {
  const [_, __, contractId, proposalId] = argv;
  const result = await adminClient.getProposal(contractId, proposalId);
  console.log(result);
};

get()
  .then(() => console.log("success"))
  .catch(console.error);
