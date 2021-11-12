const {
  UpdateParticipanteController,
} = require("../../../../presentation/controllers/campeonato/update-participante");
const {
  updateParticipanteFactory,
} = require("../../useCases/campeonato/update-paticipante");

const updateParticipanteControllerFactory = function () {
  return new UpdateParticipanteController(updateParticipanteFactory());
};

exports.updateParticipanteControllerFactory =
  updateParticipanteControllerFactory;
