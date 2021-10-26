const { Router } = require("express");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
const {
  middlewarePermissionAtleticaDCE,
} = require("../../presentation/middlewares/permissionAtleticaDCE");
const {
  createPostagemControllerFactory,
} = require("../factories/controllers/postagem/create-postagem-controller");
const {
  deletePostagemControllerFactory,
} = require("../factories/controllers/postagem/delete-postagem-controller");
const {
  getAllPostagensControllerFactory,
} = require("../factories/controllers/postagem/get-all-postagens-controller");
const {
  getPostagemByIdControllerFactory,
} = require("../factories/controllers/postagem/get-postagem-by-id-controller");
const {
  updatePostagemControllerFactory,
} = require("../factories/controllers/postagem/update-postagem-controller");

const router = Router();

const createPostagemController = createPostagemControllerFactory();
const getAllPostagensController = getAllPostagensControllerFactory();
const getPostagemByIdController = getPostagemByIdControllerFactory();
const updatePostagemController = updatePostagemControllerFactory();
const deletePostagemController = deletePostagemControllerFactory();

router.use(middlewareAuthentication);

router.post("/", middlewarePermissionAtleticaDCE, (req, res) =>
  createPostagemController.handle(req, res)
);
router.get("/", (req, res) => getAllPostagensController.handle(req, res));
router.get("/:id", (req, res) => getPostagemByIdController.handle(req, res));
router.put("/:id", middlewarePermissionAtleticaDCE, (req, res) =>
  updatePostagemController.handle(req, res)
);
router.delete("/:id", middlewarePermissionAtleticaDCE, (req, res) =>
  deletePostagemController.handle(req, res)
);

exports.PostagemRouter = router;
