const { BadRequestException } = require("../../errors/BadRequestException");

class UserDataController {
  constructor(userDataUseCase) {
    this.userDataUseCase = userDataUseCase;
  }

  async handle(request, response) {
    const user = await this.userDataUseCase.handle(request.userID);

    response.status(200).json(user);
  }
}

exports.UserDataController = UserDataController;
