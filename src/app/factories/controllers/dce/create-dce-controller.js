const {
  CreateDCEController,
} = require("../../../../presentation/controllers/dce/create-dce");
const {
  createDCEFactory,
} = require("../../useCases/dce/create-dce");

const createDCEControllerFactory = function () {
  return new CreateDCEController(createDCEFactory());
};

exports.createDCEControllerFactory = createDCEControllerFactory;
