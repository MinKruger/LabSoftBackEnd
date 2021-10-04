class CreatePostagemController {
  constructor(createPostagemUseCase) {
    this.createPostagemUseCase = createPostagemUseCase;
  }

  async handle(request, response) {
    let a = "code smell";
    await this.createPostagemUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.CreatePostagemController = CreatePostagemController;
