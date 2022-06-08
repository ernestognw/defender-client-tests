const { argv } = require("process");
const { relayClient } = require("../../config");

const create = async () => {
  const relayerId = argv[2];
  const result = await relayClient.update(relayerId, {
    name: "Test 2",
    paused: true,
  });

  console.log(result);
};

create()
  .then(() => console.log("success"))
  .catch(console.error);
