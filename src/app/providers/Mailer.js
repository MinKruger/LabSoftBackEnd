const { send } = require("../../shared/utils/SMTP");

class Mailer {
  static sendMail(body, subject, recipient) {
    return send({body, subject, recipient});
  }
}

exports.Mailer = Mailer;
