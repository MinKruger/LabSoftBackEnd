class GetCursosController {
  constructor(getCursosUseCase) {
    this.getCursosUseCase = getCursosUseCase;
  }

  async handle(request, response) {
    const cursos = await this.getCursosUseCase.handle();

    response.status(200).json(cursos);
  }
}

exports.GetCursosController = GetCursosController;
