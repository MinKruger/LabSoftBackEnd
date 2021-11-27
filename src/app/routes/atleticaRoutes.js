const { Router } = require("express");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
const {
  middlewarePermissionAllDCE,
} = require("../../presentation/middlewares/permissionAllDCE");
const {
  createAtleticaControllerFactory,
} = require("../factories/controllers/atletica/create-atletica-controller");
const {
  deleteAtleticaControllerFactory,
} = require("../factories/controllers/atletica/delete-atletica-controller");
const {
  getAllAtleticasControllerFactory,
} = require("../factories/controllers/atletica/get-all-atleticas-controller");
const {
  getAtleticaByIdControllerFactory,
} = require("../factories/controllers/atletica/get-atletica-by-id-controller");
const {
  updateAtleticaControllerFactory,
} = require("../factories/controllers/atletica/update-atletica-controller");

const router = Router();

const createAlteticaController = createAtleticaControllerFactory();
const getAtleticaByIdController = getAtleticaByIdControllerFactory();
const getAllAtleticasController = getAllAtleticasControllerFactory();
const updateAtleticaController = updateAtleticaControllerFactory();
const deleteAtleticaController = deleteAtleticaControllerFactory();

router.get("/", (req, res) => getAllAtleticasController.handle(req, res));
router.post(
  "/",
  middlewareAuthentication,
  middlewarePermissionAllDCE,
  (req, res) => createAlteticaController.handle(req, res)
);
router.get("/:id", (req, res) => getAtleticaByIdController.handle(req, res));
router.put(
  "/:id",
  middlewareAuthentication,
  middlewarePermissionAllDCE,
  (req, res) => updateAtleticaController.handle(req, res)
);
router.delete(
  "/:id",
  middlewareAuthentication,
  middlewarePermissionAllDCE,
  (req, res) => deleteAtleticaController.handle(req, res)
);

exports.AtleticaRouter = router;
