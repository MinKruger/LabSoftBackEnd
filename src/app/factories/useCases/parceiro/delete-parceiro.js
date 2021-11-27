const {
  ParceiroRepository,
} = require("../../../../data/repositories/ParceiroRepository");
const {
  DeleteParceiroUseCase,
} = require("../../../../data/useCases/parceiro/delete-parceiro");

const deleteParceiroFactory = function () {
  const parceiroRepository = new ParceiroRepository();

  return new DeleteParceiroUseCase(parceiroRepository);
};

exports.deleteParceiroFactory = deleteParceiroFactory;
