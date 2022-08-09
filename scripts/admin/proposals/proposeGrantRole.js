const { adminClient } = require("../../../config");

const proposeGrantRole = async () => {
  const result = await adminClient.proposeGrantRole(
    {
      title: "Test grant role",
      description: "Test grant role",
      via: "0xbEA76Df6AFccA5E729b839c0A258Df8f359ac64c",
      viaType: "EOA",
    },
    {
      network: "rinkeby",
      address: "0xA6cC0F56ca304b673C746702Ae6709197B77d434",
    },
    "0xb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1",
    "0xbEA76Df6AFccA5E729b839c0A258Df8f359ac64c"
  );

  console.log(result);
};

proposeGrantRole()
  .then(() => console.log("success"))
  .catch(console.error);
