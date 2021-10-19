const { BadRequestException } = require("../../errors/BadRequestException");

class LoginController {
  constructor(loginUseCase) {
    this.loginUseCase = loginUseCase;
  }

  async handle(request, response) {
    const { email, senha } = request.body;

    if (!email) {
      throw new BadRequestException("Email param is required.");
    }

    if (!senha) {
      throw new BadRequestException("Senha param is required.");
    }

    const token = await this.loginUseCase.handle(request.body);

    response.status(200).json({token});
  }
}

exports.LoginController = LoginController;
