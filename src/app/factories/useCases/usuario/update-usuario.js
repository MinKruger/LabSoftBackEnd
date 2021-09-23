const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  UpdateUsuarioUseCase,
} = require("../../../../data/useCases/usuario/update-usuario");

const updateUsuarioFactory = function () {
  const usuarioRepository = new UsuarioRepository();

  return new UpdateUsuarioUseCase(usuarioRepository);
};

exports.updateUsuarioFactory = updateUsuarioFactory;
