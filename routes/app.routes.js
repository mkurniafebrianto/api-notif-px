const pushNotificationController = require("../controller/push-notif.controller");
const express = require("express");
const router = express.Router();

router.post("/send-notification", pushNotificationController.sendPushNotification);

module.exports = router;