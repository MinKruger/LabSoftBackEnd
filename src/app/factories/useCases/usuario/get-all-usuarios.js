const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  GetAllUsuariosUseCase,
} = require("../../../../data/useCases/usuario/get-all-usuarios");

const getAllUsuariosFactory = function () {
  const usuarioRepository = new UsuarioRepository();

  return new GetAllUsuariosUseCase(usuarioRepository);
};

exports.getAllUsuariosFactory = getAllUsuariosFactory;
