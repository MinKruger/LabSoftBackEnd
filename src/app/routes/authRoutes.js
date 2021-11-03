const { Router } = require("express");
const {
  registerControllerFactory,
} = require("../factories/controllers/auth/register-controller");
const {
  loginControllerFactory
} = require("../factories/controllers/auth/login-controller");
const {
  forgotPasswordControllerFactory
} = require("../factories/controllers/auth/forgot-password-controller");

const router = Router();

const registerController = registerControllerFactory();
const loginController = loginControllerFactory();
const forgotPasswordController = forgotPasswordControllerFactory();

router.post("/register", (req, res) => registerController.handle(req, res));
router.post("/login", (req, res) => loginController.handle(req, res));
router.post("/forgot_password", (req, res) => forgotPasswordController.handle(req, res));

exports.AuthRouter = router;
