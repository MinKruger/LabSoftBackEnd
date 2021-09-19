const {
  DeleteAtleticaController,
} = require("../../../../presentation/controllers/atletica/delete-atletica");
const {
  deleteAtleticaFactory,
} = require("../../useCases/atletica/delete-atletica");

const deleteAtleticaControllerFactory = function () {
  return new DeleteAtleticaController(deleteAtleticaFactory());
};

exports.deleteAtleticaControllerFactory = deleteAtleticaControllerFactory;
