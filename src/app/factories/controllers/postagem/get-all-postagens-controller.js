const {
  GetAllPostagensController,
} = require("../../../../presentation/controllers/postagem/get-all-postagens");
const {
  getAllPostagensFactory,
} = require("../../useCases/postagem/get-all-postagens");

const getAllPostagensControllerFactory = function () {
  return new GetAllPostagensController(getAllPostagensFactory());
};

exports.getAllPostagensControllerFactory = getAllPostagensControllerFactory;
