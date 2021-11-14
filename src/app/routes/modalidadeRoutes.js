const { Router } = require("express");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
const {
  getAllEventosControllerFactory,
} = require("../factories/controllers/evento/get-all-eventos-controller");
const {
  getAllModalidadesControllerFactory,
} = require("../factories/controllers/modalidade/get-all-modalidades-controller");

const router = Router();

const getAllModalidadesController = getAllModalidadesControllerFactory();

router.use(middlewareAuthentication);

router.get("/", (req, res) => getAllModalidadesController.handle(req, res));

exports.ModalidadeRouter = router;
