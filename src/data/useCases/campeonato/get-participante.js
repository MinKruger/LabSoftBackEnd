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

    if (participantes.length) {
      const atletica = await this.atleticaRepository.findOne({
        where: { id: participante[0].id_atletica },
        raw: true,
      });

      participantes.forEach((participante) => {
        participante.nome = atletica.nome;
        participante.logo = atletica.logo;
      });
    }

    return participantes;
  }
}

exports.GetParticipantesUseCase = GetParticipantesUseCase;
