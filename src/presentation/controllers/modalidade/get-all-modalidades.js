class GetAllModalidadesController {
  constructor(getAllModalidadesUseCase) {
    this.getAllModalidadesUseCase = getAllModalidadesUseCase;
  }

  async handle(request, response) {
    const modalidades = await this.getAllModalidadesUseCase.handle();

    response.status(200).json(modalidades);
  }
}

exports.GetAllModalidadesController = GetAllModalidadesController;
