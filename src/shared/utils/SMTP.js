const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config({
  path: {
    production: ".env.production",
    staging: ".env.staging",
    development: ".env.development",
  }[process.env.NODE_ENV || "development"],
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  },
});

async function send(options) {
  const mailSent = await transporter.sendMail({
    text: options.body,
    subject: options.subject,
    from: `${process.env.SMTP_SENDER_NAME} <${process.env.SMTP_USER}>`,
    to: options.recipient
  });
  return mailSent;
}

module.exports = {
  send,
};