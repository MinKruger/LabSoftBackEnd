const {
  PostagemRepository,
} = require("../../../../data/repositories/PostagemRepository");
const {
  GetAllPostagensUseCase,
} = require("../../../../data/useCases/postagem/get-all-postagens");

const getAllPostagensFactory = function () {
  const postagemRepository = new PostagemRepository();

  return new GetAllPostagensUseCase(postagemRepository);
};

exports.getAllPostagensFactory = getAllPostagensFactory;
