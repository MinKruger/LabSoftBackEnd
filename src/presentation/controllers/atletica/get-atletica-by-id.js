class GetAtleticaByIdController {
  constructor(getAtleticaByIdUseCase) {
    this.getAtleticaByIdUseCase = getAtleticaByIdUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    const atletica = await this.getAtleticaByIdUseCase.handle(id);

    response.status(200).json(atletica);
  }
}

exports.GetAtleticaByIdController = GetAtleticaByIdController;
