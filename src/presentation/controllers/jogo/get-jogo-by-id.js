class GetJogoByIdController {
  constructor(getJogoByIdUseCase) {
    this.getJogoByIdUseCase = getJogoByIdUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    const jogo = await this.getJogoByIdUseCase.handle(id);

    response.status(200).json(jogo);
  }
}

exports.GetJogoByIdController = GetJogoByIdController;
