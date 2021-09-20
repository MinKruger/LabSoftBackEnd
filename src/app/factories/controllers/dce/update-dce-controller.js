const {
  UpdateDCEController,
} = require("../../../../presentation/controllers/dce/update-dce");
const {
  updateDCEFactory,
} = require("../../useCases/dce/update-dce");

const updateDCEControllerFactory = function () {
  return new UpdateDCEController(updateDCEFactory());
};

exports.updateDCEControllerFactory = updateDCEControllerFactory;
