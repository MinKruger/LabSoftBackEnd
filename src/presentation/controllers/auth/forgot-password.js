const { BadRequestException } = require("../../errors/BadRequestException");

class ForgotPasswordController {
  constructor(forgotPasswordUseCase) {
    this.forgotPasswordUseCase = forgotPasswordUseCase;
  }

  async handle(request, response) {
    const { email } = request.body;

    if (!email) {
      throw new BadRequestException("Email param is required.");
    }

    await this.forgotPasswordUseCase.handle(request.body);

    response.status(200);
  }
}

exports.ForgotPasswordController = ForgotPasswordController;
