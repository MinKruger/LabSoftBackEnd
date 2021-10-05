const {
  UpdatePostagemController,
} = require("../../../../presentation/controllers/postagem/update-postagem");
const {
  updatePostagemFactory,
} = require("../../useCases/postagem/update-postagem");

const updatePostagemControllerFactory = function () {
  return new UpdatePostagemController(updatePostagemFactory());
};

exports.updatePostagemControllerFactory = updatePostagemControllerFactory;
