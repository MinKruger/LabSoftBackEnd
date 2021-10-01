const { Router } = require("express");
const {
  createPostagemControllerFactory,
} = require("../factories/controllers/postagem/create-postagem-controller");

const router = Router();

const createPostagemController = createPostagemControllerFactory();

router.post("/create", (req, res) => createPostagemController.handle(req, res));

exports.PostagemRouter = router;
