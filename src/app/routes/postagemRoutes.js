const { Router } = require("express");
const { middlewareRoleAdmin } = require("../../presentation/middlewares/admin");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
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

router.post("/", middlewareAuthentication, (req, res) =>
  createPostagemController.handle(req, res)
);
router.get("/", middlewareAuthentication, (req, res) =>
  getAllPostagensController.handle(req, res)
);
router.get("/:id", middlewareAuthentication, (req, res) =>
  getPostagemByIdController.handle(req, res)
);
router.put("/:id", middlewareAuthentication, (req, res) =>
  updatePostagemController.handle(req, res)
);
router.delete(
  "/:id",
  middlewareAuthentication,
  middlewareRoleAdmin,
  (req, res) => deletePostagemController.handle(req, res)
);

exports.PostagemRouter = router;
