class DeleteParticipanteController {
  constructor(deleteParticipanteUseCase) {
    this.deleteParticipanteUseCase = deleteParticipanteUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;
    await this.deleteParticipanteUseCase.handle(id);

    response.status(200).end();
  }
}

exports.DeleteParticipanteController = DeleteParticipanteController;
