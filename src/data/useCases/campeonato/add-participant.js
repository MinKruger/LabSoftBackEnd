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
    const campeonato = await this.campeonatoRepository.findById(
      data.id_campeonato
    );
    if (!campeonato) {
      throw new NotFoundException("Campeonato not found");
    }

    data.ids_atleticas.forEach(async (id) => {
      const participantExists = await this.participanteRepository.findOne({
        where: {
          id_atletica: id,
          id_campeonato: data.id_campeonato,
        },
      });
  
      if (!participantExists) {
        const participante = new ParticipanteEntity({...data,id_atletica:id});
        await this.participanteRepository.create(participante);
      }

    })
  }
}

exports.AddParticipantUseCase = AddParticipantUseCase;
