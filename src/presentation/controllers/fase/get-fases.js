class GetFasesController {
  constructor(getFasesUseCase) {
    this.getFasesUseCase = getFasesUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;
    const fases = await this.getFasesUseCase.handle(request.body, id);

    response.status(200).json(fases);
  }
}

exports.GetFasesController = GetFasesController;
