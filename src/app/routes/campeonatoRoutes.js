const { Router } = require("express");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
const {
  middlewarePermissionDCE2AndDCE3,
} = require("../../presentation/middlewares/permissionDCE2AndDCE3");
const {
  addParticipantControllerFactory,
} = require("../factories/controllers/campeonato/add-participant-controller");
const {
  createCampeonatoControllerFactory,
} = require("../factories/controllers/campeonato/create-campeonato-controller");
const {
  updateCampeonatoControllerFactory,
} = require("../factories/controllers/campeonato/update-campeonato-controller");

const router = Router();

const createCampeonatoController = createCampeonatoControllerFactory();
const updateCampeonatoController = updateCampeonatoControllerFactory();
const addParticipantController = addParticipantControllerFactory();

router.use(middlewareAuthentication);

router.post("/", middlewarePermissionDCE2AndDCE3, (req, res) =>
  createCampeonatoController.handle(req, res)
);
router.put("/:id", middlewarePermissionDCE2AndDCE3, (req, res) =>
  updateCampeonatoController.handle(req, res)
);
router.put("/:participantes", middlewarePermissionDCE2AndDCE3, (req, res) =>
  addParticipantController.handle(req, res)
);

exports.CampeonatoRouter = router;
