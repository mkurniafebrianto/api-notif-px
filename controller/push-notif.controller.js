var admin = require("firebase-admin");
var fcm = require("fcm-notification");

var serviceAccount = require("../config/push-notif-key.json");
const certPath = admin.credential.cert(serviceAccount);
var Fcm = new fcm(certPath);

exports.sendPushNotification = (req, res, next) => {
  try {
    let tokens = req.body.fcm_tokens;

    let message = {
      notification: {
        title: "Performatrix",
        body: "Jangan lupa presensi masuk!"
      },
      data: {
        orderId: "123",
        orderDate: "2022-10-28"
      },
      // token: req.body.fcm_token,
    }

    Fcm.sendToMultipleToken(message, tokens, function (err, resp) {
      if (err) {
        return res.status(500).send({
          message: err
        });
      } else {
        return res.status(200).send({
          message: "Notification Sent"
        });
      }
    });
  } catch (err) {
    throw err
  }
};