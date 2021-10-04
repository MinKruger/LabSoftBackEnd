const {
  DeletePostagemController,
} = require("../../../../presentation/controllers/postagem/delete-postagem");
const {
  deletePostagemFactory,
} = require("../../useCases/postagem/delete-postagem");

const deletePostagemControllerFactory = function () {
  return new DeletePostagemController(deletePostagemFactory());
};

exports.deletePostagemControllerFactory = deletePostagemControllerFactory;
