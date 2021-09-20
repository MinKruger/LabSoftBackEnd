class GetDCEByIdController {
  constructor(getDCEByIdUseCase) {
    this.getDCEByIdUseCase = getDCEByIdUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    const DCE = await this.getDCEByIdUseCase.handle(id);

    response.status(200).json(DCE);
  }
}

exports.GetDCEByIdController = GetDCEByIdController;
