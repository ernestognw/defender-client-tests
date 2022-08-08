const { autotaskClient } = require("../../config");

const list = async () => {
  const result = await autotaskClient.list();
  console.log(result);
};

list()
  .then(() => console.log("success"))
  .catch(console.error);
