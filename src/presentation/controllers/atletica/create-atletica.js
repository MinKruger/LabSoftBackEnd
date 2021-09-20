class CreateAtleticaController {
  constructor(createAtleticaUseCase) {
    this.createAtleticaUseCase = createAtleticaUseCase;
  }

  async handle(request, response) {
    await this.createAtleticaUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.CreateAtleticaController = CreateAtleticaController;
