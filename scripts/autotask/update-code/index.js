const { join } = require("path");
const { argv } = require("process");
const { autotaskClient } = require("../../../config");

const updateCode = async () => {
  const autotaskId = argv[2];
  const result = await autotaskClient.updateCodeFromFolder(
    autotaskId,
    join(__dirname, "code")
  );
  console.log(result);
};

updateCode()
  .then(() => console.log("success"))
  .catch(console.error);
