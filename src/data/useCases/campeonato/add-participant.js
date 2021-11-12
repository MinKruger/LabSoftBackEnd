const { ParticipanteEntity } = require("../../../domain/entities/Participante");
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
    const usuario = await this.atleticaRepository.findById(data.id_atletica);
    if (!usuario) {
      throw new NotFoundException("Usuário not found");
    }

    const campeonato = await this.campeonatoRepository.findById(
      data.id_campeonato
    );
    if (!campeonato) {
      throw new NotFoundException("Campeonato not found");
    }

    const participante = new ParticipanteEntity(data);

    await this.participanteRepository.create(participante);
  }
}

exports.AddParticipantUseCase = AddParticipantUseCase;
