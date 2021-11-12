class UpdateParticipanteController {
  constructor(updateParticipanteUseCase) {
    this.updateParticipanteUseCase = updateParticipanteUseCase;
  }

  async handle(request, response) {
    const id = request.params.id;
    await this.updateParticipanteUseCase.handle(request.body, id);

    response.status(200).end();
  }
}

exports.UpdateParticipanteController = UpdateParticipanteController;
