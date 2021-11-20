const {
  UserDataController,
} = require("../../../../presentation/controllers/auth/user-data");
const { userDataFactory } = require("../../useCases/auth/user-data");

const userDataControllerFactory = function () {
  return new UserDataController(userDataFactory());
};

exports.userDataControllerFactory = userDataControllerFactory;
