const {
  CreatePostagemController,
} = require("../../../../presentation/controllers/postagem/create-postagem");
const {
  createPostagemFactory,
} = require("../../useCases/postagem/create-postagem");

const createPostagemControllerFactory = function () {
  return new CreatePostagemController(createPostagemFactory());
};

exports.createPostagemControllerFactory = createPostagemControllerFactory;
