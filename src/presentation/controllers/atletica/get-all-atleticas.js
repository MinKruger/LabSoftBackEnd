class GetAllAtleticasController {
  constructor(getAllAtleticasUseCase) {
    this.getAllAtleticasUseCase = getAllAtleticasUseCase;
  }

  async handle(request, response) {
    const atletica = await this.getAllAtleticasUseCase.handle();

    response.status(200).json(atletica);
  }
}

exports.GetAllAtleticasController = GetAllAtleticasController;
