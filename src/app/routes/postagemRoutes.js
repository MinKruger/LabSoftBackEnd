const { Router } = require("express");
const {
  createPostagemControllerFactory,
} = require("../factories/controllers/postagem/create-postagem-controller");
const {
  getAllPostagensControllerFactory,
} = require("../factories/controllers/postagem/get-all-postagens-controller");
const {
  getPostagemByIdControllerFactory,
} = require("../factories/controllers/postagem/get-atletica-by-id-controller");

const router = Router();

const createPostagemController = createPostagemControllerFactory();
const getAllPostagensController = getAllPostagensControllerFactory();
const getPostagemByIdController = getPostagemByIdControllerFactory();

router.post("/create", (req, res) => createPostagemController.handle(req, res));
router.get("/", (req, res) => getAllPostagensController.handle(req, res));
router.get("/:id", (req, res) => getPostagemByIdController.handle(req, res));

exports.PostagemRouter = router;
