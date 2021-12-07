const { Router } = require("express");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
const {
  getCursosControllerFactory,
} = require("../factories/controllers/curso/get-cursos");

const router = Router();

const getCursosController = getCursosControllerFactory();

router.use(middlewareAuthentication);

router.get("/", (req, res) => getCursosController.handle(req, res));

exports.CursoRouter = router;
