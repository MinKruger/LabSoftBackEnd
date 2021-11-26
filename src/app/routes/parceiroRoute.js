const { Router } = require("express");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
const {
  addParceiroControllerFactory,
} = require("../factories/controllers/parceiro/add-parceiro-controller");

const router = Router();

const addParceiroController = addParceiroControllerFactory();

router.use(middlewareAuthentication);

router.post("/", (req, res) => addParceiroController.handle(req, res));

exports.ParceiroRouter = router;
