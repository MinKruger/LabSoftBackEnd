const {
  GetAllUsersController,
} = require("../../../presentation/controllers/get-all-users-controller");
const { getAllUserFactory } = require("../useCases/get-all-users");

const getAllUserControllerFactory = () => {
  return new GetAllUsersController(getAllUserFactory());
};

exports.getAllUserControllerFactory = getAllUserControllerFactory;
