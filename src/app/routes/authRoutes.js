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
const {
  resetPasswordControllerFactory
} = require("../factories/controllers/auth/reset-password-controller");
const {
  userDataControllerFactory
} = require("../factories/controllers/auth/user-data-controller");
const {
  middlewareAuthentication,
} = require("../../presentation/middlewares/authentication");

const router = Router();

const registerController = registerControllerFactory();
const loginController = loginControllerFactory();
const forgotPasswordController = forgotPasswordControllerFactory();
const resetPasswordController = resetPasswordControllerFactory();
const userDataController = userDataControllerFactory();

router.post("/register", (req, res) => registerController.handle(req, res));
router.post("/login", (req, res) => loginController.handle(req, res));
router.post("/forgot_password", (req, res) => forgotPasswordController.handle(req, res));
router.post("/reset_password", (req, res) => resetPasswordController.handle(req, res));
router.get("/user_data", middlewareAuthentication, (req, res) => userDataController.handle(req, res));

exports.AuthRouter = router;
