const { Router } = require("express");
const {
  createPostagemControllerFactory,
} = require("../factories/controllers/postagem/create-postagem-controller");
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

router.post("/create", (req, res) => createPostagemController.handle(req, res));
router.get("/", (req, res) => getAllPostagensController.handle(req, res));
router.get("/:id", (req, res) => getPostagemByIdController.handle(req, res));
router.put("/update/:id", (req, res) =>
  updatePostagemController.handle(req, res)
);

exports.PostagemRouter = router;
