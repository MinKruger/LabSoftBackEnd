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
  deleteParticipanteControllerFactory,
} = require("../factories/controllers/campeonato/delete-participante-controller");
const {
  getAllCampeonatosControllerFactory,
} = require("../factories/controllers/campeonato/get-all-campeonatos-controller");
const {
  getParticipantesControllerFactory,
} = require("../factories/controllers/campeonato/get-participantes-controller");
const {
  updateCampeonatoControllerFactory,
} = require("../factories/controllers/campeonato/update-campeonato-controller");
const {
  updateParticipanteControllerFactory,
} = require("../factories/controllers/campeonato/update-participante-controller");

const router = Router();

const createCampeonatoController = createCampeonatoControllerFactory();
const updateCampeonatoController = updateCampeonatoControllerFactory();
const addParticipantController = addParticipantControllerFactory();
const updateParticipanteController = updateParticipanteControllerFactory();
const deleteParticipanteController = deleteParticipanteControllerFactory();
const getParticipantesController = getParticipantesControllerFactory();
const getAllCampeonatosController = getAllCampeonatosControllerFactory();

router.use(middlewareAuthentication);

router.post("/", middlewarePermissionDCE2AndDCE3, (req, res) =>
  createCampeonatoController.handle(req, res)
);
router.get("/", (req, res) => getAllCampeonatosController.handle(req, res));
router.put("/:id", middlewarePermissionDCE2AndDCE3, (req, res) =>
  updateCampeonatoController.handle(req, res)
);
router.post("/participantes", middlewarePermissionDCE2AndDCE3, (req, res) =>
  addParticipantController.handle(req, res)
);
router.get("/participantes", (req, res) =>
  getParticipantesController.handle(req, res)
);
router.put("/participantes/:id", middlewarePermissionDCE2AndDCE3, (req, res) =>
  updateParticipanteController.handle(req, res)
);
router.delete(
  "/participantes/:id",
  middlewarePermissionDCE2AndDCE3,
  (req, res) => deleteParticipanteController.handle(req, res)
);

exports.CampeonatoRouter = router;
