const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  CreateUsuarioUseCase,
} = require("../../../../data/useCases/usuario/create-usuario");

const createUsuarioFactory = function () {
  const usuarioRepository = new UsuarioRepository();

  return new CreateUsuarioUseCase(usuarioRepository);
};

exports.createUsuarioFactory = createUsuarioFactory;
