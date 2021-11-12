const {
  AtleticaRepository,
} = require("../../../../data/repositories/AtleticaRepository");
const {
  CampeonatoRepository,
} = require("../../../../data/repositories/CampeonatoRepository");
const {
  ParticipanteRepository,
} = require("../../../../data/repositories/ParticipanteRepository");
const {
  UpdateParticipanteUseCase,
} = require("../../../../data/useCases/campeonato/update-participante");

const updateParticipanteFactory = function () {
  const participanteRepository = new ParticipanteRepository();
  const campeonatoRepository = new CampeonatoRepository();
  const atleticaRepository = new AtleticaRepository();

  return new UpdateParticipanteUseCase(
    participanteRepository,
    atleticaRepository,
    campeonatoRepository
  );
};

exports.updateParticipanteFactory = updateParticipanteFactory;
