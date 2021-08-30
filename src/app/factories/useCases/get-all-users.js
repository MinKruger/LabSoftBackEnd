const { UserRepository } = require("../../../data/repositories/UserRepository");
const { GetAllUsersUseCase } = require("../../../data/useCases/get-all-users");

const getAllUserFactory = () => {
  const userRepository = new UserRepository();
  const getAllUserUseCase = new GetAllUsersUseCase(userRepository);

  return getAllUserUseCase;
};

exports.getAllUserFactory = getAllUserFactory;
