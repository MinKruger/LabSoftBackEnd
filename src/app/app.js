require("../infra/database/index");
require("express-async-errors");

const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");

const swaggerDocs = require("../shared/docs/swagger.json");
const {
  handleErrorsMiddleware,
} = require("../presentation/middlewares/handleErrors");
const { AtleticaRouter } = require("./routes/atleticaRoutes");
const { UsuarioRouter } = require("./routes/usuarioRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use("/atletica", AtleticaRouter);
app.use("/usuario", UsuarioRouter);

app.use(handleErrorsMiddleware);

module.exports = app;
