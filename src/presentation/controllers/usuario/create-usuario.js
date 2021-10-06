class CreateUsuarioController {
  constructor(createUsuarioUseCase) {
    this.createUsuarioUseCase = createUsuarioUseCase;
  }

  async handle(request, response) {
    const { login } = request.body;

    if (!login) {
      throw new BadRequestException("Login param is required.");
    }

    await this.createUsuarioUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.CreateUsuarioController = CreateUsuarioController;
