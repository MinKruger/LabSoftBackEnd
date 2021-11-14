const { ParticipanteEntity } = require("../../../domain/entities/Participante");
const {
  NotAcceptableException,
} = require("../../../presentation/errors/NotAcceptableException");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class AddParticipantUseCase {
  constructor(
    participanteRepository,
    atleticaRepository,
    campeonatoRepository
  ) {
    this.participanteRepository = participanteRepository;
    this.atleticaRepository = atleticaRepository;
    this.campeonatoRepository = campeonatoRepository;
  }

  async handle(data) {
    const atletica = await this.atleticaRepository.findById(data.id_atletica);
    if (!atletica) {
      throw new NotFoundException("Usuário not found");
    }

    const campeonato = await this.campeonatoRepository.findById(
      data.id_campeonato
    );
    if (!campeonato) {
      throw new NotFoundException("Campeonato not found");
    }

    const participantExists = await this.participanteRepository.findOne({
      where: {
        id_atletica: data.id_atletica,
        id_campeonato: data.id_campeonato,
      },
    });

    if (participantExists) {
      throw new NotAcceptableException("Participante already exist");
    }

    const participante = new ParticipanteEntity(data);

    await this.participanteRepository.create(participante);
  }
}

exports.AddParticipantUseCase = AddParticipantUseCase;
