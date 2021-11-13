const { ParticipanteEntity } = require("../../../domain/entities/Participante");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class DeleteParticipanteUseCase {
  constructor(participanteRepository) {
    this.participanteRepository = participanteRepository;
  }

  async handle(id) {
    const participante = await this.participanteRepository.findById(id);
    if (!participante) {
      throw new NotFoundException("Participante not found");
    }

    await this.participanteRepository.deleteById(id);
  }
}

exports.DeleteParticipanteUseCase = DeleteParticipanteUseCase;
