class DeleteJogosController {
  constructor(deleteJogosUseCase) {
    this.deleteJogosUseCase = deleteJogosUseCase;
  }

  async handle(request, response) {
    const id = request.params.id;
    await this.deleteJogosUseCase.handle(id);

    response.status(200).end();
  }
}

exports.DeleteJogosController = DeleteJogosController;
