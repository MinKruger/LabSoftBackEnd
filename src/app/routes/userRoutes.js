const { Router } = require("express");
const {
  createUserControllerFactory,
} = require("../factories/controllers/create-user-controller");
const {
  getAllUserControllerFactory,
} = require("../factories/controllers/get-all-users-controllers");

const router = Router();

const getAllUserController = getAllUserControllerFactory();
const createUserController = createUserControllerFactory();

router.get("/", (req, res) => getAllUserController.handle(req, res));

router.post("/", (req, res) => createUserController.handle(req, res));

exports.UserRouter = router;
