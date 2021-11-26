const {
  AddParceiroController,
} = require("../../../../presentation/controllers/parceiros/add-parceiro");
const { addParceiroFactory } = require("../../useCases/parceiro/add-parceiro");

const addParceiroControllerFactory = function () {
  return new AddParceiroController(addParceiroFactory());
};

exports.addParceiroControllerFactory = addParceiroControllerFactory;
