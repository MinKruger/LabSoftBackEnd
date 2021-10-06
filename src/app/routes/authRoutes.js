const { Router } = require("express");
const {
  registerControllerFactory,
} = require("../factories/controllers/auth/register-controller");

const router = Router();

const registerController = registerControllerFactory();

router.post("/register", (req, res) => registerController.handle(req, res));

exports.AuthRouter = router;
