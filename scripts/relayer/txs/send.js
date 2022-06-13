const { argv } = require("process");
const { relayer } = require("../../../config");

const sleep = async (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const send = async (n, intervalMs) => {
  const txParams = (value) => ({
    to: "0xbEA76Df6AFccA5E729b839c0A258Df8f359ac64c",
    value,
    gasLimit: 21000,
    // ...(Math.random() > 0.5
    //   ? {
    //       gasPrice: 3e9,
    //     }
    //   : {
    //       maxFeePerGas: 3e9,
    //       maxPriorityFeePerGas: 3e9,
    //     }),
    speed: "fast",
    // gasPrice: 1e5,
    validUntil: new Date(new Date().getTime() + 1000 * 60 * 5), // 10 minutes
  });

  const txsToSend = new Array(Number(n)).fill().map(async (_, i) => {
    await sleep(intervalMs * i);
    try {
      const txResponse = await relayer.sendTransaction(txParams(1));
      console.time(
        `Query tx (id: ${txResponse.transactionId} | nonce: ${txResponse.nonce})`
      );
      const tx = await relayer.query(txResponse.transactionId);
      console.timeEnd(
        `Query tx (id: ${txResponse.transactionId} | nonce: ${txResponse.nonce})`
      );
      // console.log(
      //   `${i + 1} | Sent tx ${txResponse.nonce} ${txResponse.hash} ${
      //     txResponse.transactionId
      //   }`
      // );
    } catch (err) {
      console.log(
        `${i + 1} | Failed sending tx: ${err.message} ${
          err.response.data.message
        }`
      );
    }
  });

  // And then the batch
  await Promise.all(txsToSend);
};

send(argv[2] || 1, 100)
  .then(() => console.log("success"))
  .catch(console.error);
