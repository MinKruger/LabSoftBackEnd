const { ParticipanteEntity } = require("../../../domain/entities/Participante");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class AddParticipantUseCase {
  constructor(participanteRepository, usuarioRepository, campeonatoRepository) {
    this.participanteRepository = participanteRepository;
    this.usuarioRepository = usuarioRepository;
    this.campeonatoRepository = campeonatoRepository;
  }

  async handle(data) {
    const usuario = await this.usuárioRepository.findById(data.usuario_id);
    if (!usuario) {
      throw new NotFoundException("Usuário not found");
    }

    const campeonato = await this.campeonatoRepository.findById(
      data.campeonato_id
    );
    if (!campeonato) {
      throw new NotFoundException("Campeonato not found");
    }

    const participante = new ParticipanteEntity(data);

    await this.participanteRepository.create(participante);
  }
}

exports.AddParticipantUseCase = AddParticipantUseCase;
