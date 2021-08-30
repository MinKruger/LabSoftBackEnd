const app = require("../../app/app");
const dotenv = require("dotenv");

dotenv.config({
  path: {
    production: ".env.production",
    staging: ".env.staging",
    development: ".env.development",
  }[process.env.NODE_ENV || "development"],
});

app.listen(5555, () => console.log("Server running"));
