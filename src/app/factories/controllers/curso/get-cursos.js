const {
  GetCursosController,
} = require("../../../../presentation/controllers/curso/get-cursos");
const { getCursosFactory } = require("../../useCases/curso/get-cursos");

const getCursosControllerFactory = function () {
  return new GetCursosController(getCursosFactory());
};

exports.getCursosControllerFactory = getCursosControllerFactory;
