const {
  DeleteParceirosController,
} = require("../../../../presentation/controllers/parceiros/delete-parceiro");
const {
  GetAllParceirosController,
} = require("../../../../presentation/controllers/parceiros/get-all-parceiroos");
const {
  deleteParceiroFactory,
} = require("../../useCases/parceiro/delete-parceiro");
const {
  getAllParceirosFactory,
} = require("../../useCases/parceiro/get-all-parceiros");

const deleteParceiroControllerFactory = function () {
  return new DeleteParceirosController(deleteParceiroFactory());
};

exports.deleteParceiroControllerFactory = deleteParceiroControllerFactory;
