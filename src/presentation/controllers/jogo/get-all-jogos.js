class GetAllJogosController {
  constructor(getAllJogosUseCase) {
    this.getAllJogosUseCase = getAllJogosUseCase;
  }

  async handle(request, response) {
    const jogos = await this.getAllJogosUseCase.handle();

    response.status(200).json(jogos);
  }
}

exports.GetAllJogosController = GetAllJogosController;
