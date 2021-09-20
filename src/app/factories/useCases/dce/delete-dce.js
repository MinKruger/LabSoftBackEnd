const {
  DCERepository,
} = require("../../../../data/repositories/DCERepository");
const {
  DeleteDCEUseCase,
} = require("../../../../data/useCases/dce/delete-dce");

const deleteDCEFactory = function () {
  const dceRepository = new DCERepository();

  return new DeleteDCEUseCase(dceRepository);
};

exports.deleteDCEFactory = deleteDCEFactory;
