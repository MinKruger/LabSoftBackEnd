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

    const token = await this.forgotPasswordUseCase.handle(request.body);

    response.status(200).json({token});
  }
}

exports.ForgotPasswordController = ForgotPasswordController;
