require("../infra/database/index");
require("express-async-errors");

const express = require("express");
const {
  handleErrorsMiddleware,
} = require("../presentation/middlewares/handleErrors");
const { UserRouter } = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/users", UserRouter);

app.use(handleErrorsMiddleware);

module.exports = app;
