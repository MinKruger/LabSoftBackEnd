require("../infra/database/index");
require("express-async-errors");

const express = require("express");
const {
  handleErrorsMiddleware,
} = require("../presentation/middlewares/handleErrors");
const { AtleticaRouter } = require("./routes/atleticaRoutes");

const app = express();

app.use(express.json());

app.use("/atletica", AtleticaRouter);

app.use(handleErrorsMiddleware);

module.exports = app;
