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
  CreateCampeonatoUseCase,
} = require("../../../../data/useCases/campeonato/create-campeonato");

const createCampeonatoFactory = function () {
  const campeonatoRepository = new CampeonatoRepository();
  const atleticaRepository = new AtleticaRepository();
  const eventoRepository = new EventoRepository();
  const modalidadeRepository = new ModalidadeRepository();

  return new CreateCampeonatoUseCase(
    campeonatoRepository,
    atleticaRepository,
    eventoRepository,
    modalidadeRepository
  );
};

exports.createCampeonatoFactory = createCampeonatoFactory;
