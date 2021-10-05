const {
  PostagemRepository,
} = require("../../../../data/repositories/PostagemRepository");
const {
  CreatePostagemUseCase,
} = require("../../../../data/useCases/postagem/create-postagem");

const createPostagemFactory = function () {
  const postagemRepository = new PostagemRepository();

  return new CreatePostagemUseCase(postagemRepository);
};

exports.createPostagemFactory = createPostagemFactory;
