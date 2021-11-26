const {
  GetAllParceirosController,
} = require("../../../../presentation/controllers/parceiros/get-all-parceiroos");
const {
  getAllParceirosFactory,
} = require("../../useCases/parceiro/get-all-parceiros");

const getAllParceiroControllerFactory = function () {
  return new GetAllParceirosController(getAllParceirosFactory());
};

exports.getAllParceirosControllerFactory = getAllParceiroControllerFactory;
