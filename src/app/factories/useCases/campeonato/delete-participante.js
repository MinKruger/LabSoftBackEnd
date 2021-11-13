const {
  ParticipanteRepository,
} = require("../../../../data/repositories/ParticipanteRepository");
const {
  DeleteParticipanteUseCase,
} = require("../../../../data/useCases/campeonato/delete-participante");

const deleteParticipanteFactory = function () {
  const participanteRepository = new ParticipanteRepository();

  return new DeleteParticipanteUseCase(participanteRepository);
};

exports.deleteParticipanteFactory = deleteParticipanteFactory;
