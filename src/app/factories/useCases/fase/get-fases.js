const {
  FaseRepository,
} = require("../../../../data/repositories/FaseRepository");
const { GetFasesUseCase } = require("../../../../data/useCases/fase/get-fases");

const getFasesFactory = function () {
  const faseRepository = new FaseRepository();

  return new GetFasesUseCase(faseRepository);
};

exports.getFasesFactory = getFasesFactory;
