const {
  PostagemRepository,
} = require("../../../../data/repositories/PostagemRepository");
const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  CreatePostagemUseCase,
} = require("../../../../data/useCases/postagem/create-postagem");
const {
  EtiquetaRepository,
} = require("../../../../data/repositories/EtiquetaRepository");
const {
  EtiquetaPostagemRepository,
} = require("../../../../data/repositories/EtiquetaPostagemRepository");

const createPostagemFactory = function () {
  const postagemRepository = new PostagemRepository();
  const usuarioRepository = new UsuarioRepository();
  const etiquetaRepository = new EtiquetaRepository();
  const etiquetaPostagemRepository = new EtiquetaPostagemRepository();
  return new CreatePostagemUseCase(postagemRepository, usuarioRepository, etiquetaRepository, etiquetaPostagemRepository);
};

exports.createPostagemFactory = createPostagemFactory;
