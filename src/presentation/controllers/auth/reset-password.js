const { BadRequestException } = require("../../errors/BadRequestException");

class ResetPasswordController {
  constructor(resetPasswordUseCase) {
    this.resetPasswordUseCase = resetPasswordUseCase;
  }

  async handle(request, response) {
    const { token, senha } = request.body;

    if (!token) {
      throw new BadRequestException("Token param is required.");
    }

    if (!senha) {
      throw new BadRequestException("Senha param is required.");
    }

    await this.resetPasswordUseCase.handle(request.body);

    response.status(200).end();
  }
}

exports.ResetPasswordController = ResetPasswordController;
