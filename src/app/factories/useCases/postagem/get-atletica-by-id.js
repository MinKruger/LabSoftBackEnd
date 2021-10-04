const {
  PostagemRepository,
} = require("../../../../data/repositories/PostagemRepository");
const {
  GetPostagemByIdUseCase,
} = require("../../../../data/useCases/postagem/get-atletica-by-id");

const getPostagemByIdFactory = function () {
  const postagemRepository = new PostagemRepository();

  return new GetPostagemByIdUseCase(postagemRepository);
};

exports.getPostagemByIdFactory = getPostagemByIdFactory;
