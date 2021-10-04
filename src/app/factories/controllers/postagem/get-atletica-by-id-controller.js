const {
  GetPostagemByIdController,
} = require("../../../../presentation/controllers/postagem/get-postagem-by-id");
const {
  getPostagemByIdFactory,
} = require("../../useCases/postagem/get-atletica-by-id");

const getPostagemByIdControllerFactory = function () {
  return new GetPostagemByIdController(getPostagemByIdFactory());
};

exports.getPostagemByIdControllerFactory = getPostagemByIdControllerFactory;
