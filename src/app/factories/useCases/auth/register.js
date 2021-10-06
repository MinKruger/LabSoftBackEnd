const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  RegisterUseCase,
} = require("../../../../data/useCases/auth/register");

const registerFactory = function () {
  const usuarioRepository = new UsuarioRepository();

  return new RegisterUseCase(usuarioRepository);
};

exports.registerFactory = registerFactory;
