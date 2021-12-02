class GetFasesController {
  constructor(getFasesUseCase) {
    this.getFasesUseCase = getFasesUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;
    await this.getFasesUseCase.handle(request.body, id);

    response.status(201).end();
  }
}

exports.GetFasesController = GetFasesController;
