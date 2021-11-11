const { Router } = require("express");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
const {
  middlewarePermissionAllDCE,
} = require("../../presentation/middlewares/permissionAllDCE");
const {
  createCampeonatoControllerFactory,
} = require("../factories/controllers/campeonato/create-campeonato-controller");
const {
  updateCampeonatoControllerFactory,
} = require("../factories/controllers/campeonato/update-campeonato-controller");

const router = Router();

const createCampeonatoController = createCampeonatoControllerFactory();
const updateCampeonatoController = updateCampeonatoControllerFactory();

router.use(middlewareAuthentication);

router.post("/", middlewarePermissionAllDCE, (req, res) =>
  createCampeonatoController.handle(req, res)
);
router.put("/:id", middlewarePermissionAllDCE, (req, res) =>
  updateCampeonatoController.handle(req, res)
);

exports.CampeonatoRouter = router;
