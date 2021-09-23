const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  GetUsuarioByIdUseCase,
} = require("../../../../data/useCases/usuario/get-usuario-by-id");

const getUsuarioByIdFactory = function () {
  const usuarioRepository = new UsuarioRepository();

  return new GetUsuarioByIdUseCase(usuarioRepository);
};

exports.getUsuarioByIdFactory = getUsuarioByIdFactory;
