const { argv } = require("process");
const { relayer } = require("../../config");

const list = async () => {
  const result = await relayer.list();
  console.log(result);
};

list().then(() => console.log("success"));
