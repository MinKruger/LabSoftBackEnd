const {
  ParceiroRepository,
} = require("../../../../data/repositories/ParceiroRepository");
const {
  UpdateParceiroUseCase,
} = require("../../../../data/useCases/parceiro/update-parceiro");

const updateParceiroFactory = function () {
  const parceiroRepository = new ParceiroRepository();

  return new UpdateParceiroUseCase(parceiroRepository);
};

exports.updateParceiroFactory = updateParceiroFactory;
