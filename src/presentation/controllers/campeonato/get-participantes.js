class GetParticipantesController {
  constructor(getParticipanteUseCase) {
    this.getParticipanteUseCase = getParticipanteUseCase;
  }

  async handle(request, response) {
    const { id_atletica, id_campeonato } = request.query;

    const participantes = await this.getParticipanteUseCase.handle({
      id_atletica,
      id_campeonato,
    });

    response.status(200).json(participantes);
  }
}

exports.GetParticipantesController = GetParticipantesController;
