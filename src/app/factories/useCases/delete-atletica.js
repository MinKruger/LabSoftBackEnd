const {
  AtleticaRepository,
} = require("../../../data/repositories/AtleticaRepository");
const {
  DeleteAtleticaUseCase,
} = require("../../../data/useCases/atletica/delete-atletica");

const deleteAtleticaFactory = function () {
  const atleticaRepository = new AtleticaRepository();

  const deleteAtleticaUseCase = new DeleteAtleticaUseCase(atleticaRepository);

  return deleteAtleticaUseCase;
};

exports.deleteAtleticaFactory = deleteAtleticaFactory;
