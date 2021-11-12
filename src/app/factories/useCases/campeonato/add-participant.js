const {
  CampeonatoRepository,
} = require("../../../../data/repositories/CampeonatoRepository");
const {
  ParticipanteRepository,
} = require("../../../../data/repositories/ParticipanteRepository");
const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  AddParticipantUseCase,
} = require("../../../../data/useCases/campeonato/add-participant");

const addParticipantFactory = function () {
  const participanteRepository = new ParticipanteRepository();
  const campeonatoRepository = new CampeonatoRepository();
  const usuarioRepository = new UsuarioRepository();
  return new AddParticipantUseCase(
    participanteRepository,
    usuarioRepository,
    campeonatoRepository
  );
};

exports.addParticipantFactory = addParticipantFactory;
