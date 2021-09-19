const {
  AtleticaRepository,
} = require("../../../data/repositories/AtleticaRepository");
const {
  UpdateAtleticaUseCase,
} = require("../../../data/useCases/atletica/update-atletica");

const updateAtleticaFactory = function () {
  const atleticaRepository = new AtleticaRepository();

  const updateAtleticaUseCase = new UpdateAtleticaUseCase(atleticaRepository);

  return updateAtleticaUseCase;
};

exports.updateAtleticaFactory = updateAtleticaFactory;
