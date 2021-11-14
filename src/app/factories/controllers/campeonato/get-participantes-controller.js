const {
  GetParticipantesController,
} = require("../../../../presentation/controllers/campeonato/get-participantes");
const {
  getParticipantesFactory,
} = require("../../useCases/campeonato/get-participantes");

const getParticipantesControllerFactory = function () {
  return new GetParticipantesController(getParticipantesFactory());
};

exports.getParticipantesControllerFactory = getParticipantesControllerFactory;
