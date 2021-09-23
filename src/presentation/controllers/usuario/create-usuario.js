class CreateUsuarioController {
  constructor(createUsuarioUseCase) {
    this.createUsuarioUseCase = createUsuarioUseCase;
  }

  async handle(request, response) {
    await this.createUsuarioUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.CreateUsuarioController = CreateUsuarioController;
