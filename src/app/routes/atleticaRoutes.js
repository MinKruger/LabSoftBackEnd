const { Router } = require("express");
const {
  createAtleticaControllerFactory,
} = require("../factories/controllers/create-atletica-controller");
const {
  getAllAtleticasControllerFactory,
} = require("../factories/controllers/get-all-atleticas-controller");
const {
  getAtleticaByIdControllerFactory,
} = require("../factories/controllers/get-atletica-by-id-controller");
const {
  updateAtleticaControllerFactory,
} = require("../factories/controllers/update-atletica-controller");

const router = Router();

const createAlteticaController = createAtleticaControllerFactory();
const getAtleticaByIdController = getAtleticaByIdControllerFactory();
const getAllAtleticasController = getAllAtleticasControllerFactory();
const updateAtleticaController = updateAtleticaControllerFactory();

router.post("/", (req, res) => createAlteticaController.handle(req, res));
router.get("/", (req, res) => getAllAtleticasController.handle(req, res));
router.get("/:id", (req, res) => getAtleticaByIdController.handle(req, res));
router.put("/:id", (req, res) => updateAtleticaController.handle(req, res));

exports.AtleticaRouter = router;
