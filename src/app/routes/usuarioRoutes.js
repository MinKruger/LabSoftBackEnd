const { Router } = require("express");
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

router.get("/", (req, res) => getAllUsuariosController.handle(req, res));
router.get("/:id", (req, res) => getUsuarioByIdController.handle(req, res));
router.post("/create", (req, res) => createUsuarioController.handle(req, res));
router.put("/update/:id", (req, res) =>
  updateUsuarioController.handle(req, res)
);
router.delete("/delete/:id", (req, res) =>
  deleteUsuarioController.handle(req, res)
);

exports.UsuarioRouter = router;