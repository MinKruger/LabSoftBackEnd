require("../infra/database/index");
require("express-async-errors");

const express = require("express");
const cors = require("cors");
const path = require("path");
const swaggerUI = require("swagger-ui-express");

const swaggerDocs = require("../shared/docs/swagger.json");
const {
  handleErrorsMiddleware,
} = require("../presentation/middlewares/handleErrors");
const { AuthRouter } = require("./routes/authRoutes");
const { AtleticaRouter } = require("./routes/atleticaRoutes");
const { UsuarioRouter } = require("./routes/usuarioRoutes");
const { PostagemRouter } = require("./routes/postagemRoutes");
const { CampeonatoRouter } = require("./routes/campeonatoRoutes");
const { EventoRouter } = require("./routes/eventoRoutes");
const { ModalidadeRouter } = require("./routes/modalidadeRoutes");
const { JogoRouter } = require("./routes/jogoRoutes");
const { ParceiroRouter } = require("./routes/parceiroRoute");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/public", express.static(path.join(process.cwd(), "public")));
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use("/auth", AuthRouter);
app.use("/atleticas", AtleticaRouter);
app.use("/usuarios", UsuarioRouter);
app.use("/postagens", PostagemRouter);
app.use("/campeonatos", CampeonatoRouter);
app.use("/eventos", EventoRouter);
app.use("/modalidades", ModalidadeRouter);
app.use("/jogos", JogoRouter);
app.use("/parceiros", ParceiroRouter);

app.use(handleErrorsMiddleware);

module.exports = app;
