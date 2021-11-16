class GetParticipantesUseCase {
  constructor(participanteRepository, atleticaRepository) {
    this.participanteRepository = participanteRepository;
    this.atleticaRepository = atleticaRepository;
  }

  async handle({ id_campeonato, id_atletica }) {
    const query = {};

    if (id_campeonato) {
      query.id_campeonato = id_campeonato;
    }
    if (id_atletica) {
      query.id_atletica = id_atletica;
    }

    const participantes = await this.participanteRepository.getAll({
      where: query,
      raw: true,
    });

    return participantes;
  }
}

exports.GetParticipantesUseCase = GetParticipantesUseCase;
