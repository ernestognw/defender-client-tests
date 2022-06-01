const { join } = require("path");
const { argv } = require("process");
const { autotask } = require("../../../config");

const updateCode = async () => {
  const autotaskId = argv[2];
  const result = await autotask.updateCodeFromFolder(
    autotaskId,
    `${__dirname}/code`
  );
  console.log(result);
};

updateCode().then(() => console.log("success"));
