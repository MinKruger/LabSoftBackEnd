const { BadRequestException } = require("../../errors/BadRequestException");

class ResetPasswordController {
  constructor(resetPasswordUseCase) {
    this.resetPasswordUseCase = resetPasswordUseCase;
  }

  async handle(request, response) {
    const { codigo, senha } = request.body;

    if (!codigo) {
      throw new BadRequestException("Codigo param is required.");
    }

    if (!senha) {
      throw new BadRequestException("Senha param is required.");
    }

    await this.resetPasswordUseCase.handle(request.body);

    response.status(200).end();
  }
}

exports.ResetPasswordController = ResetPasswordController;
