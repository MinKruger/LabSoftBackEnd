const { Router } = require("express");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
const {
  getFasesControllerFactory,
} = require("../factories/controllers/fase/get-fases");

const router = Router();

const getFasesController = getFasesControllerFactory();

router.use(middlewareAuthentication);

router.get("/", (req, res) => getFasesController.handle(req, res));

exports.FaseRouter = router;
