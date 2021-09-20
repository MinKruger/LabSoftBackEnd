const {
  GetAllDCEsController,
} = require("../../../../presentation/controllers/dce/get-all-dces");
const {
  getAllDCEsFactory,
} = require("../../useCases/dce/get-all-dces");

const getAllDCEsControllerFactory = function () {
  return new GetAllDCEsController(getAllDCEsFactory());
};

exports.getAllDCEsControllerFactory = getAllDCEsControllerFactory;
