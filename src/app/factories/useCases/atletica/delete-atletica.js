const {
  AtleticaRepository,
} = require("../../../../data/repositories/AtleticaRepository");
const {
  DeleteAtleticaUseCase,
} = require("../../../../data/useCases/atletica/delete-atletica");

const deleteAtleticaFactory = function () {
  const atleticaRepository = new AtleticaRepository();

  return new DeleteAtleticaUseCase(atleticaRepository);
};

exports.deleteAtleticaFactory = deleteAtleticaFactory;
