class CreateAtleticaController {
  constructor(createAtleticaUseCase) {
    this.createAtleticaUseCase = createAtleticaUseCase;
  }

  async handle(request, response) {
    request.body.host = process.env.HOST_PREFIX + request.headers.host;
    await this.createAtleticaUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.CreateAtleticaController = CreateAtleticaController;
