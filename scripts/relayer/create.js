const { relayClient } = require("../../config");

const create = async () => {
  const result = await relayClient.create({
    name: "MyNewRelayer",
    network: "rinkeby",
    minBalance: BigInt(1e17).toString(),
    policies: {
      whitelistReceivers: ["0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B"],
    },
  });

  console.log(result);
};

create()
  .then(() => console.log("success"))
  .catch(console.error);
