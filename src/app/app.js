require("../infra/database/index");
require("express-async-errors");

const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");

const swaggerDocs = require("../shared/docs/swagger.json");
const {
  handleErrorsMiddleware,
} = require("../presentation/middlewares/handleErrors");
const { AuthRouter } = require("./routes/authRoutes");
const { AtleticaRouter } = require("./routes/atleticaRoutes");
const { UsuarioRouter } = require("./routes/usuarioRoutes");
const { PostagemRouter } = require("./routes/postagemRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use("/auth", AuthRouter);
app.use("/atletica", AtleticaRouter);
app.use("/usuario", UsuarioRouter);
app.use("/postagem", PostagemRouter);

app.use(handleErrorsMiddleware);

module.exports = app;
