const {
  ParceiroRepository,
} = require("../../../../data/repositories/ParceiroRepository");
const {
  AddParceiroUseCase,
} = require("../../../../data/useCases/parceiro/add-parceiro");

const addParceiroFactory = function () {
  const parceiroRepository = new ParceiroRepository();

  return new AddParceiroUseCase(parceiroRepository);
};

exports.addParceiroFactory = addParceiroFactory;
