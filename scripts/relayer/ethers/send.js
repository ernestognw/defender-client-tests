const { signer } = require("./config");

const send = async () => {
  try {
    const result = await signer.sendTransaction({
      to: "0xbEA76Df6AFccA5E729b839c0A258Df8f359ac64c",
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

send()
  .then(() => console.log("success"))
  .catch(console.error);
