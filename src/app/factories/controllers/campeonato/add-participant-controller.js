const {
  AddParticipantController,
} = require("../../../../presentation/controllers/campeonato/add-participant");
const {
  addParticipantFactory,
} = require("../../useCases/campeonato/add-participant");

const addParticipantControllerFactory = function () {
  return new AddParticipantController(addParticipantFactory());
};

exports.addParticipantControllerFactory = addParticipantControllerFactory;
