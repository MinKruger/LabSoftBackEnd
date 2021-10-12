class CreateAtleticaController {
  constructor(createAtleticaUseCase) {
    this.createAtleticaUseCase = createAtleticaUseCase;
  }

  async handle(request, response) {
    request.body.host = request.headers.host;
    await this.createAtleticaUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.CreateAtleticaController = CreateAtleticaController;
