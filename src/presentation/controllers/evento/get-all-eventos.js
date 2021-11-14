class GetAllEventosController {
  constructor(getAllEventosUseCase) {
    this.getAllEventosUseCase = getAllEventosUseCase;
  }

  async handle(request, response) {
    const eventos = await this.getAllEventosUseCase.handle();

    response.status(200).json(eventos);
  }
}

exports.GetAllEventosController = GetAllEventosController;
