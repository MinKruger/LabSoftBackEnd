const {
  CampeonatoRepository,
} = require("../../../../data/repositories/CampeonatoRepository");
const {
  GetAllCampeonatosUseCase,
} = require("../../../../data/useCases/campeonato/get-all-campeonatos");

const getAllCampeonatosFactory = function () {
  const campeonatoRepository = new CampeonatoRepository();

  return new GetAllCampeonatosUseCase(campeonatoRepository);
};

exports.getAllCampeonatosFactory = getAllCampeonatosFactory;
