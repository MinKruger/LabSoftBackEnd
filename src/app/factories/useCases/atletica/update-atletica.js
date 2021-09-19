const {
  AtleticaRepository,
} = require("../../../../data/repositories/AtleticaRepository");
const {
  UpdateAtleticaUseCase,
} = require("../../../../data/useCases/atletica/update-atletica");

const updateAtleticaFactory = function () {
  const atleticaRepository = new AtleticaRepository();

  return new UpdateAtleticaUseCase(atleticaRepository);
};

exports.updateAtleticaFactory = updateAtleticaFactory;
