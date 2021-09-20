const {
  DCERepository,
} = require("../../../../data/repositories/DCERepository");
const {
  CreateDCEUseCase,
} = require("../../../../data/useCases/dce/create-dce");

const createDCEFactory = function () {
  const dceRepository = new DCERepository();

  return new CreateDCEUseCase(dceRepository);
};

exports.createDCEFactory = createDCEFactory;
