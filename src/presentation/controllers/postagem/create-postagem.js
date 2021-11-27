class CreatePostagemController {
  constructor(createPostagemUseCase) {
    this.createPostagemUseCase = createPostagemUseCase;
  }

  async handle(request, response) {
    request.body.host = process.env.HOST_PREFIX + request.headers.host;
    request.body.id_usuario = request.userID;
    await this.createPostagemUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.CreatePostagemController = CreatePostagemController;
