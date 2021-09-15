const { Router } = require("express");
const {
  createAtleticaControllerFactory,
} = require("../factories/controllers/create-atletica-controller");

const router = Router();

const createUserController = createAtleticaControllerFactory();

router.post("/", (req, res) => createUserController.handle(req, res));

exports.AtleticaRouter = router;
