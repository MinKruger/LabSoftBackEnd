const {
  DCERepository,
} = require("../../../../data/repositories/DCERepository");
const {
  GetAllDCEsUseCase,
} = require("../../../../data/useCases/dce/get-all-dces");

const getAllDCEsFactory = function () {
  const dceRepository = new DCERepository();

  return new GetAllDCEsUseCase(dceRepository);
};

exports.getAllDCEsFactory = getAllDCEsFactory;
