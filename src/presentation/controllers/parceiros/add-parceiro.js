class AddParceiroController {
  constructor(addParceiroUseCase) {
    this.addParceiroUseCase = addParceiroUseCase;
  }

  async handle(request, response) {
    request.body.host = process.env.HOST_PREFIX + request.headers.host;
    await this.addParceiroUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.AddParceiroController = AddParceiroController;
