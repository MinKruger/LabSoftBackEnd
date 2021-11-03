const { Router } = require("express");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
const {
  createUsuarioControllerFactory,
} = require("../factories/controllers/usuario/create-usuario-controller");
const {
  deleteUsuarioControllerFactory,
} = require("../factories/controllers/usuario/delete-usuario-controller");
const {
  getAllUsuariosControllerFactory,
} = require("../factories/controllers/usuario/get-all-usuarios-controller");
const {
  getUsuarioByIdControllerFactory,
} = require("../factories/controllers/usuario/get-usuario-by-id-controller");
const {
  updateUsuarioControllerFactory,
} = require("../factories/controllers/usuario/update-usuario-controller");

const router = Router();

const createUsuarioController = createUsuarioControllerFactory();
const getUsuarioByIdController = getUsuarioByIdControllerFactory();
const getAllUsuariosController = getAllUsuariosControllerFactory();
const updateUsuarioController = updateUsuarioControllerFactory();
const deleteUsuarioController = deleteUsuarioControllerFactory();

router.use(middlewareAuthentication);

router.get("/", middlewareAuthentication, (req, res) =>
  getAllUsuariosController.handle(req, res)
);
router.get("/:id", middlewareAuthentication, (req, res) =>
  getUsuarioByIdController.handle(req, res)
);
router.post("/", (req, res) => createUsuarioController.handle(req, res));
router.put("/:id", middlewareAuthentication, (req, res) =>
  updateUsuarioController.handle(req, res)
);
router.delete("/:id", middlewareAuthentication, (req, res) =>
  deleteUsuarioController.handle(req, res)
);

exports.UsuarioRouter = router;
