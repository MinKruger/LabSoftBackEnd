const {
  EventoRepository,
} = require("../../../../data/repositories/EventoRepository");
const {
  GetAllEventosUseCase,
} = require("../../../../data/useCases/evento/get-all-evento");

const getAllEventosFactory = function () {
  const eventoRepository = new EventoRepository();

  return new GetAllEventosUseCase(eventoRepository);
};

exports.getAllEventosFactory = getAllEventosFactory;
