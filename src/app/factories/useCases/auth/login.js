const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  LoginUseCase,
} = require("../../../../data/useCases/auth/login");

const loginFactory = function () {
  const usuarioRepository = new UsuarioRepository();

  return new LoginUseCase(usuarioRepository);
};

exports.loginFactory = loginFactory;
