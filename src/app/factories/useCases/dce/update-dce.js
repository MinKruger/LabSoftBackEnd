const {
  DCERepository,
} = require("../../../../data/repositories/DCERepository");
const {
  UpdateDCEUseCase,
} = require("../../../../data/useCases/dce/update-dce");

const updateDCEFactory = function () {
  const dceRepository = new DCERepository();

  return new UpdateDCEUseCase(dceRepository);
};

exports.updateDCEFactory = updateDCEFactory;
