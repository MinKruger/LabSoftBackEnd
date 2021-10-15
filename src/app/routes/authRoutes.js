const { Router } = require("express");
const {
  registerControllerFactory,
} = require("../factories/controllers/auth/register-controller");
const {
  loginControllerFactory
} = require("../factories/controllers/auth/login-controller");

const router = Router();

const registerController = registerControllerFactory();
const loginController = loginControllerFactory();

router.post("/register", (req, res) => registerController.handle(req, res));
router.post("/login", (req, res) => loginController.handle(req, res));

exports.AuthRouter = router;
