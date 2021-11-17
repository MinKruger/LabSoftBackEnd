const {
  GetAllJogosController,
} = require("../../../../presentation/controllers/jogo/get-all-jogos");
const {
  getAllJogosFactory,
} = require("../../useCases/jogo/get-all-jogos");

const getAllJogosControllerFactory = function () {
  return new GetAllJogosController(getAllJogosFactory());
};

exports.getAllJogosControllerFactory = getAllJogosControllerFactory;
