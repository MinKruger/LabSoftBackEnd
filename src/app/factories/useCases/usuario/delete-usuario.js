const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  DeleteUsuarioUseCase,
} = require("../../../../data/useCases/usuario/delete-usuario");

const deleteUsuarioFactory = function () {
  const usuarioRepository = new UsuarioRepository();

  return new DeleteUsuarioUseCase(usuarioRepository);
};

exports.deleteUsuarioFactory = deleteUsuarioFactory;
