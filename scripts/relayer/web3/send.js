const { web3 } = require("./config");

const send = async () => {
  const [from] = await web3.eth.getAccounts();
  try {
    const result = await web3.eth.sendTransaction({
      from,
      to: "0xbEA76Df6AFccA5E729b839c0A258Df8f359ac64c",
      // isPrivate: true,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

send()
  .then(() => console.log("success"))
  .catch(console.error);
