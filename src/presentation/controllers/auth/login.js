const { BadRequestException } = require("../../errors/BadRequestException");

class LoginController {
  constructor(loginUseCase) {
    this.loginUseCase = loginUseCase;
  }

  async handle(request, response) {
    const { login, senha } = request.body;

    if (!login) {
      throw new BadRequestException("Login param is required.");
    }

    if (!senha) {
      throw new BadRequestException("Senha param is required.");
    }

    const token = await this.loginUseCase.handle(request.body);

    response.status(200).json({token});
  }
}

exports.LoginController = LoginController;
