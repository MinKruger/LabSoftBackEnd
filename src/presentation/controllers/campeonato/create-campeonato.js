class CreateCampeonatoController {
  constructor(createCampeonatoUseCase) {
    this.createCampeonatoUseCase = createCampeonatoUseCase;
  }

  async handle(request, response) {
    await this.createCampeonatoUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.CreateCampeonatoController = CreateCampeonatoController;
