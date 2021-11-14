const {
  ModalidadeRepository,
} = require("../../../../data/repositories/ModalidadeRepository");

const {
  GetAllModalidadesUseCase,
} = require("../../../../data/useCases/modalidade/get-all-modalidades");

const getAllModalidadesFactory = function () {
  const modalidadeRepository = new ModalidadeRepository();

  return new GetAllModalidadesUseCase(modalidadeRepository);
};

exports.getAllModalidadesFactory = getAllModalidadesFactory;
