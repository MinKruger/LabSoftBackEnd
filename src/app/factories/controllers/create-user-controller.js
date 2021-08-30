const {
  CreateUserController,
} = require("../../../presentation/controllers/create-user");
const { createUserFactory } = require("../useCases/create-user");

const createUserControllerFactory = function () {
  return new CreateUserController(createUserFactory());
};

exports.createUserControllerFactory = createUserControllerFactory;
