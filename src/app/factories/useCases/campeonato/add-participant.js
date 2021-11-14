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
  AddParticipantUseCase,
} = require("../../../../data/useCases/campeonato/add-participant");

const addParticipantFactory = function () {
  const participanteRepository = new ParticipanteRepository();
  const campeonatoRepository = new CampeonatoRepository();
  const atleticaRepository = new AtleticaRepository();

  return new AddParticipantUseCase(
    participanteRepository,
    atleticaRepository,
    campeonatoRepository
  );
};

exports.addParticipantFactory = addParticipantFactory;
