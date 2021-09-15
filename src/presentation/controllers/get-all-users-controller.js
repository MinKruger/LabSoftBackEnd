const { NotFoundException } = require("../errors/NotFoundException");

class GetAllUsersController {
  constructor(getAllUsersUseCase) {
    this.getAllUsersUseCase = getAllUsersUseCase;
  }

  async handle(request, response) {
    const users = await this.getAllUsersUseCase.handle();

    if (!users.length) {
      throw new NotFoundException("Users not founded");
    }

    response.status(200).json(users);
  }
}

exports.GetAllUsersController = GetAllUsersController;
