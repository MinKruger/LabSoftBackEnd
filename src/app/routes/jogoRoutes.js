const { Router } = require("express");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");
const {
  createJogoControllerFactory,
} = require("../factories/controllers/jogo/create-jogo-controller");
const {
  getAllJogosControllerFactory,
} = require("../factories/controllers/jogo/get-all-jogos-controller");
const {
  getJogoByIdControllerFactory,
} = require("../factories/controllers/jogo/get-jogo-by-id-controller");
const {
  updateJogoControllerFactory,
} = require("../factories/controllers/jogo/update-jogo-controller");

const router = Router();

const createJogoController = createJogoControllerFactory();
const getJogoByIdController = getJogoByIdControllerFactory();
const getAllJogosController = getAllJogosControllerFactory();
const updateJogoController = updateJogoControllerFactory();
const deleteJogoController = deleteJogoControllerFactory();

router.use(middlewareAuthentication);

router.get("/", (req, res) => getAllJogosController.handle(req, res));
router.get("/:id", (req, res) => getJogoByIdController.handle(req, res));
router.post("/", (req, res) => createJogoController.handle(req, res));
router.put("/:id", (req, res) => updateJogoController.handle(req, res));

exports.JogoRouter = router;
