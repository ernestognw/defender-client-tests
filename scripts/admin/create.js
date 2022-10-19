const { adminClient } = require("../../config");

const create = async () => {
  const proposal = {
    contract: [
      {
        address: "0x24B5C627cF54582F93eDbcF6186989227400Ac75",
        name: "ERC20 Token",
        network: "goerli",
        abi: JSON.stringify([
          {
            inputs: [
              { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ]),
      },
      {
        address: "0xa50d145697530e8fef3F59a9643c6E9992d0f30D",
        network: "goerli",
        name: "Roles Contract",
        abi: JSON.stringify([
          {
            inputs: [
              {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
              },
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
            ],
            name: "grantRole",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ]),
      },
    ],
    title: "Batch test",
    description: "Mint, transfer and modify access control",
    type: "batch",
    via: "0x604f140853Aba4c5073216f0418566DB4C82ffd9",
    viaType: "Gnosis Safe",
    metadata: {}, // Required field but empty
    steps: [
      {
        contractId: "goerli-0x24B5C627cF54582F93eDbcF6186989227400Ac75",
        targetFunction: {
          name: "mint",
          inputs: [{ type: "uint256", name: "amount" }],
        },
        functionInputs: ["999"],
        type: "custom",
      },
      {
        contractId: "goerli-0x24B5C627cF54582F93eDbcF6186989227400Ac75",
        targetFunction: {
          name: "transfer",
          inputs: [
            { type: "address", name: "to" },
            { type: "uint256", name: "amount" },
          ],
        },
        functionInputs: ["0x604f140853Aba4c5073216f0418566DB4C82ffd9", "999"],
        type: "custom",
      },
      {
        contractId: "goerli-0xa50d145697530e8fef3F59a9643c6E9992d0f30D",
        metadata: {
          action: "grantRole",
          role: "0x0000000000000000000000000000000000000000000000000000000000000000",
          account: "0x604f140853Aba4c5073216f0418566DB4C82ffd9",
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
