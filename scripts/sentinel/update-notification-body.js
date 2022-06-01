const { argv } = require("process");
const { sentinel } = require("../../config");

const updateNotificationBody = async () => {
  const autotaskId = argv[2];
  const updated = await sentinel.update(autotaskId, {
    alertMessageBody: "updateNotificationBody",
  });

  console.log(updated.notifyConfig);
};

updateNotificationBody().then(() => console.log("success"));
