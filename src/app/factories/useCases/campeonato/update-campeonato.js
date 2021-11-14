const {
  AtleticaRepository,
} = require("../../../../data/repositories/AtleticaRepository");
const {
  CampeonatoRepository,
} = require("../../../../data/repositories/CampeonatoRepository");
const {
  EventoRepository,
} = require("../../../../data/repositories/EventoRepository");
const {
  ModalidadeRepository,
} = require("../../../../data/repositories/ModalidadeRepository");
const {
  UpdateCampeonatoUseCase,
} = require("../../../../data/useCases/campeonato/update-campeonato");

const updateCampeonatoFactory = function () {
  const campeonatoRepository = new CampeonatoRepository();
  const atleticaRepository = new AtleticaRepository();
  const eventoRepository = new EventoRepository();
  const modalidadeRepository = new ModalidadeRepository();

  return new UpdateCampeonatoUseCase(
    campeonatoRepository,
    atleticaRepository,
    eventoRepository,
    modalidadeRepository
  );
};

exports.updateCampeonatoFactory = updateCampeonatoFactory;
