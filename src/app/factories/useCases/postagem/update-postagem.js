const {
  PostagemRepository,
} = require("../../../../data/repositories/PostagemRepository");
const {
  UpdatePostagemUseCase,
} = require("../../../../data/useCases/postagem/update-postagem");

const updatePostagemFactory = function () {
  const postagemRepository = new PostagemRepository();

  return new UpdatePostagemUseCase(postagemRepository);
};

exports.updatePostagemFactory = updatePostagemFactory;
