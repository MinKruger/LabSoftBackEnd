const {
  DeleteDCEController,
} = require("../../../../presentation/controllers/dce/delete-dce");
const {
  deleteDCEFactory,
} = require("../../useCases/dce/delete-dce");

const deleteDCEControllerFactory = function () {
  return new DeleteDCEController(deleteDCEFactory());
};

exports.deleteDCEControllerFactory = deleteDCEControllerFactory;
