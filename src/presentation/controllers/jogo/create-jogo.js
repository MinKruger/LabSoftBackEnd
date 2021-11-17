class CreateJogoController {
  constructor(createJogoUseCase) {
    this.createJogoUseCase = createJogoUseCase;
  }

  async handle(request, response) {
    await this.createJogoUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.CreateJogoController = CreateJogoController;
