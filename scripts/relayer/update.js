const { argv } = require("process");
const { relayClient } = require("../../config");

const update = async () => {
  const relayerId = argv[2];
  const result = await relayClient.update(relayerId, {
    policies: {
      privateTransactions: false,
    },
  });

  console.log(result);
};

update()
  .then(() => console.log("success"))
  .catch(console.error);
