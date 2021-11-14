const {
  DeleteParticipanteController,
} = require("../../../../presentation/controllers/campeonato/delete-participante");
const {
  deleteParticipanteFactory,
} = require("../../useCases/campeonato/delete-participante");

const deleteParticipanteControllerFactory = function () {
  return new DeleteParticipanteController(deleteParticipanteFactory());
};

exports.deleteParticipanteControllerFactory =
  deleteParticipanteControllerFactory;
