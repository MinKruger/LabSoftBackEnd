const { UserRepository } = require("../../../data/repositories/UserRepository");
const { CreateUserUseCase } = require("../../../data/useCases/create-user");

const createUserFactory = function () {
  const userRepository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);

  return createUserUseCase;
};

exports.createUserFactory = createUserFactory;
