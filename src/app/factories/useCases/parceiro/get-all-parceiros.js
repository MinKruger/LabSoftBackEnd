const {
  ParceiroRepository,
} = require("../../../../data/repositories/ParceiroRepository");
const {
  GetAllParceirosUseCase,
} = require("../../../../data/useCases/parceiro/get-all-parceiros");

const getAllParceirosFactory = function () {
  const parceiroRepository = new ParceiroRepository();

  return new GetAllParceirosUseCase(parceiroRepository);
};

exports.getAllParceirosFactory = getAllParceirosFactory;
