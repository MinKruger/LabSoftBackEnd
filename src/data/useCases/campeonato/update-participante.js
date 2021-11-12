const { ParticipanteEntity } = require("../../../domain/entities/Participante");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class UpdateParticipanteUseCase {
  constructor(
    participanteRepository,
    atleticaRepository,
    campeonatoRepository
  ) {
    this.participanteRepository = participanteRepository;
    this.atleticaRepository = atleticaRepository;
    this.campeonatoRepository = campeonatoRepository;
  }

  async handle(data, id) {
    const participante = await this.participanteRepository.findById(id, {
      raw: true,
    });

    if (!participante) {
      throw new NotFoundException("Participante not found");
    }

    if (data.id_atletica) {
      const atletica = await this.atleticaRepository.findById(data.id_atletica);

      if (!atletica) {
        throw new NotFoundException("Atletica not found");
      }
    }

    if (data.id_campeonato) {
      const campeonato = await this.campeonatoRepository.findById(
        data.id_campeonato
      );
      if (!campeonato) {
        throw new NotFoundException("Campeonato not found");
      }
    }

    const participanteUpdated = new ParticipanteEntity({
      ...participante,
      ...data,
    });

    await this.participanteRepository.update(participanteUpdated, {
      where: { id },
    });
  }
}

exports.UpdateParticipanteUseCase = UpdateParticipanteUseCase;
