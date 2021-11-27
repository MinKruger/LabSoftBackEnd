const {
  UpdateParceirosController,
} = require("../../../../presentation/controllers/parceiros/update-parceiro");
const {
  updateParceiroFactory,
} = require("../../useCases/parceiro/update-parceiro");

const updateParceiroControllerFactory = function () {
  return new UpdateParceirosController(updateParceiroFactory());
};

exports.updateParceiroControllerFactory = updateParceiroControllerFactory;
