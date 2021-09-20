class CreateDCEController {
  constructor(createDCEUseCase) {
    this.createDCEUseCase = createDCEUseCase;
  }

  async handle(request, response) {
    await this.createDCEUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.CreateDCEController = CreateDCEController;
