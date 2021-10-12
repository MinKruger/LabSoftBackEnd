class CreatePostagemController {
  constructor(createPostagemUseCase) {
    this.createPostagemUseCase = createPostagemUseCase;
  }

  async handle(request, response) {
    request.body.host = request.headers.host;
    await this.createPostagemUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.CreatePostagemController = CreatePostagemController;
