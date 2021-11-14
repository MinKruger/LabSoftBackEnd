const { Router } = require("express");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
const {
  getAllEventosControllerFactory,
} = require("../factories/controllers/evento/get-all-eventos-controller");

const router = Router();

const getAllEventosController = getAllEventosControllerFactory();

router.use(middlewareAuthentication);

router.get("/", (req, res) => getAllEventosController.handle(req, res));

exports.EventoRouter = router;
