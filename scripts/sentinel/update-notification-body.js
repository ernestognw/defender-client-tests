const { argv } = require("process");
const { sentinelClient } = require("../../config");

const updateNotificationBody = async () => {
  const autotaskId = argv[2];
  const updated = await sentinelClient.update(autotaskId, {
    alertMessageBody: "updateNotificationBody",
  });

  console.log(updated.notifyConfig);
};

updateNotificationBody()
  .then(() => console.log("success"))
  .catch(console.error);
