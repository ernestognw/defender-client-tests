const { sentinel } = require("../config");

const updateSentinelNotificationBody = async () => {
  const updated = await sentinel.update(
    "804a78ff-0887-414a-9c73-7801cbb794a1",
    {
      alertMessageBody: "updateSentinelNotificationBody",
    }
  );

  console.log(updated.notifyConfig);
};

updateSentinelNotificationBody().then(() => console.log("success"));
