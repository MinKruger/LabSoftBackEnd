class GetAtleticaByIdController {
  constructor(getAtleticaUseCase) {
    this.getAtleticaUseCase = getAtleticaUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    const atletica = await this.getAtleticaUseCase.handle(id);

    response.status(200).json(atletica);
  }
}

exports.GetAtleticaByIdController = GetAtleticaByIdController;
