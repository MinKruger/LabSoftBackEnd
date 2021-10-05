const {
  PostagemRepository,
} = require("../../../../data/repositories/PostagemRepository");
const {
  DeletePostagemUseCase,
} = require("../../../../data/useCases/postagem/delete-postagem");

const deletePostagemFactory = function () {
  const postagemRepository = new PostagemRepository();

  return new DeletePostagemUseCase(postagemRepository);
};

exports.deletePostagemFactory = deletePostagemFactory;
