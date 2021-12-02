const {
  GetFasesController,
} = require("../../../../presentation/controllers/fase/get-fases");
const { getFasesFactory } = require("../../useCases/fase/get-fases");

const getFasesControllerFactory = function () {
  return new GetFasesController(getFasesFactory());
};

exports.getFasesControllerFactory = getFasesControllerFactory;
