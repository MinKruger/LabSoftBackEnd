const {
  PostagemRepository,
} = require("../../../../data/repositories/PostagemRepository");
const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  CreatePostagemUseCase,
} = require("../../../../data/useCases/postagem/create-postagem");

const createPostagemFactory = function () {
  const postagemRepository = new PostagemRepository();
  const usuarioRepository = new UsuarioRepository();

  return new CreatePostagemUseCase(postagemRepository, usuarioRepository);
};

exports.createPostagemFactory = createPostagemFactory;
