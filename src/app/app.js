require("../infra/database/index");
require("express-async-errors");

const express = require("express");
const swaggerUI = require("swagger-ui-express");

const swaggerDocs = require("../shared/docs/swagger.json");
const {
  handleErrorsMiddleware,
} = require("../presentation/middlewares/handleErrors");
const { AtleticaRouter } = require("./routes/atleticaRoutes");
const { DCERouter } = require("./routes/DCERoutes");

const app = express();

app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use("/atletica", AtleticaRouter);
app.use("/dce", DCERouter);

app.use(handleErrorsMiddleware);

module.exports = app;
