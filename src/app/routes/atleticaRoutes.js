const { Router } = require("express");
const {
  createAtleticaControllerFactory,
} = require("../factories/controllers/create-atletica-controller");
const {
  getAtleticaByIdControllerFactory,
} = require("../factories/controllers/get-atletica-by-id-controller");

const router = Router();

const createUserController = createAtleticaControllerFactory();
const getUserController = getAtleticaByIdControllerFactory();

router.post("/", (req, res) => createUserController.handle(req, res));

router.get("/:id", (req, res) => getUserController.handle(req, res));

exports.AtleticaRouter = router;
