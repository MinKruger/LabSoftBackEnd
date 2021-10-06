const { BadRequestException } = require("../../errors/BadRequestException");

class RegisterController {
  constructor(registerUseCase) {
    this.registerUseCase = registerUseCase;
  }

  async handle(request, response) {
    const { login, senha } = request.body;

    if (!login) {
      throw new BadRequestException("Login param is required.");
    }

    if (!senha) {
      throw new BadRequestException("Senha param is required.");
    }

    await this.registerUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.RegisterController = RegisterController;
