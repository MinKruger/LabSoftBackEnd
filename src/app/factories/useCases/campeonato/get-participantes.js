const {
  AtleticaRepository,
} = require("../../../../data/repositories/AtleticaRepository");
const {
  ParticipanteRepository,
} = require("../../../../data/repositories/ParticipanteRepository");
const {
  GetParticipantesUseCase,
} = require("../../../../data/useCases/campeonato/get-participante");

const getParticipantesFactory = function () {
  const participanteRepository = new ParticipanteRepository();
  const atleticaRepository = new AtleticaRepository();

  return new GetParticipantesUseCase(
    participanteRepository,
    atleticaRepository
  );
};

exports.getParticipantesFactory = getParticipantesFactory;
