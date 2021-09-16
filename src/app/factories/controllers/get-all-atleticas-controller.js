const {
  GetAllAtleticasController,
} = require("../../../presentation/controllers/get-all-atleticas");
const { getAllAtleticasFactory } = require("../useCases/get-all-atleticas");

const getAllAtleticasControllerFactory = function () {
  return new GetAllAtleticasController(getAllAtleticasFactory());
};

exports.getAllAtleticasControllerFactory = getAllAtleticasControllerFactory;
