const {
  DCERepository,
} = require("../../../../data/repositories/DCERepository");
const {
  GetDCEByIdUseCase,
} = require("../../../../data/useCases/dce/get-dce-by-id");

const getDCEByIdFactory = function () {
  const dceRepository = new DCERepository();

  return new GetDCEByIdUseCase(dceRepository);
};

exports.getDCEByIdFactory = getDCEByIdFactory;
