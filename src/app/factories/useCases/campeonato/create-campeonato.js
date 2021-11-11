const {
  CampeonatoRepository,
} = require("../../../../data/repositories/CampeonatoRepository");
const {
  CreateCampeonatoUseCase,
} = require("../../../../data/useCases/campeonato/create-campeonato");

const createCampeonatoFactory = function () {
  const campeonatoRepository = new CampeonatoRepository();

  return new CreateCampeonatoUseCase(campeonatoRepository);
};

exports.createCampeonatoFactory = createCampeonatoFactory;
