const { argv } = require("process");
const { relayer } = require("../config");

const sleep = async (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const sendMany = async (n, intervalMs) => {
  try {
    const txParams = (value) => ({
      to: "0xE3D450F1C50757fFB2b5ddE03A1A0d7Bc32F0153",
      value,
      gasLimit: "900000",
      gasPrice: 2e7,
      // speed: "fast",
      validUntil: new Date(new Date().getTime() + 1000 * 60 * 5), // 10 minutes
    });

    // Send and await a first tx to fully initialize the relayer
    await relayer.sendTransaction(txParams(1));

    const txsToSend = new Array(n - 1).fill().map(async (_, i) => {
      await sleep(intervalMs * i);
      try {
        const txResponse = await relayer.sendTransaction(txParams(i + 2));
        console.log(
          `${i + 2} | Sent tx ${txResponse.nonce} ${txResponse.hash} ${
            txResponse.transactionId
          }`
        );
      } catch (err) {
        console.log(
          `${i + 2} | Failed sending tx: ${err.message} ${err.response.data.message}`
        );
      }
    });

    // And then the batch
    await Promise.all(txsToSend);
  } catch (err) {
    console.log(err);
  }
};

sendMany(argv[2 ?? 1], 100);
