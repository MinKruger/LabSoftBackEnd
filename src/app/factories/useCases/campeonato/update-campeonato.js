const {
  CampeonatoRepository,
} = require("../../../../data/repositories/CampeonatoRepository");
const {
  UpdateCampeonatoUseCase,
} = require("../../../../data/useCases/campeonato/update-campeonato");

const updateCampeonatoFactory = function () {
  const campeonatoRepository = new CampeonatoRepository();

  return new UpdateCampeonatoUseCase(campeonatoRepository);
};

exports.updateCampeonatoFactory = updateCampeonatoFactory;
