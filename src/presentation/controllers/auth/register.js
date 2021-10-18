const { BadRequestException } = require("../../errors/BadRequestException");

class RegisterController {
  constructor(registerUseCase) {
    this.registerUseCase = registerUseCase;
  }

  async handle(request, response) {
    const { email, senha, nome, matricula } = request.body;

    if (!email) {
      throw new BadRequestException("Email param is required.");
    }

    if (!senha) {
      throw new BadRequestException("Senha param is required.");
    }

    if (!nome) {
      throw new BadRequestException("Nome param is required.");
    }

    await this.registerUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.RegisterController = RegisterController;
