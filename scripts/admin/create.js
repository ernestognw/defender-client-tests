const { adminClient } = require("../../config");

const create = async () => {
  const proposal = {
    contract: [
      {
        address: "0x21eB4eA20427F559A714E5ce246FC6Fe02994301",
        network: "goerli",
      },
      {
        address: "0x4D6eD412bF71791909D469ef89A297FE2B4074e6",
        network: "goerli",
      },
      {
        address: "0xedF6C64445B2aD3242A4C3bD468Eda726971bd06",
        network: "goerli",
      },
    ],
    title: "Batch transfer test",
    description: "Batch transfer test",
    type: "batch",
    via: "0x604f140853Aba4c5073216f0418566DB4C82ffd9",
    viaType: "Gnosis Safe",
    metadata: {},
    steps: [
      {
        contractId: "goerli-0x4D6eD412bF71791909D469ef89A297FE2B4074e6",
        targetFunction: {
          name: "approve",
          inputs: [
            { type: "address", name: "spender" },
            { type: "uint256", name: "amount" },
          ],
        },
        functionInputs: ["0x21eB4eA20427F559A714E5ce246FC6Fe02994301", "100"],
        type: "custom",
      },
      {
        contractId: "goerli-0x21eB4eA20427F559A714E5ce246FC6Fe02994301",
        targetFunction: {
          name: "transferSelf",
          inputs: [{ type: "uint256", name: "amount" }],
        },
        functionInputs: ["100"],
        type: "custom",
      },
      {
        contractId: "goerli-0xedF6C64445B2aD3242A4C3bD468Eda726971bd06",
        metadata: {
          action: "revokeRole",
          role: "0x5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5",
          account: "0xbEA76Df6AFccA5E729b839c0A258Df8f359ac64c",
        },
        type: "access-control",
      },
    ],
  };
  const result = await adminClient.createProposal(proposal);
  console.log(result);
};

create()
  .then(() => console.log("success"))
  .catch(console.error);
