const {
  GetDCEByIdController,
} = require("../../../../presentation/controllers/dce/get-dce-by-id");
const {
  getDCEByIdFactory,
} = require("../../useCases/dce/get-dce-by-id");

const getDCEByIdControllerFactory = function () {
  return new GetDCEByIdController(getDCEByIdFactory());
};

exports.getDCEByIdControllerFactory = getDCEByIdControllerFactory;
