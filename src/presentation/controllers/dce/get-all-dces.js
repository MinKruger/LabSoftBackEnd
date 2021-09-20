class GetAllDCEsController {
  constructor(getAllDCEsUseCase) {
    this.getAllDCEsUseCase = getAllDCEsUseCase;
  }

  async handle(request, response) {
    const DCE = await this.getAllDCEsUseCase.handle();

    response.status(200).json(DCE);
  }
}

exports.GetAllDCEsController = GetAllDCEsController;
