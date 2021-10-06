class RegisterController {
  constructor(registerUseCase) {
    this.registerUseCase = registerUseCase;
  }

  async handle(request, response) {
    await this.registerUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.RegisterController = RegisterController;
