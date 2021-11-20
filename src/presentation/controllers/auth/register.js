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

    if (!matricula) {
      throw new BadRequestException("Matricula param is required.");
    }

    const token = await this.registerUseCase.handle(request.body);

    response.status(200).json({token});
  }
}

exports.RegisterController = RegisterController;
