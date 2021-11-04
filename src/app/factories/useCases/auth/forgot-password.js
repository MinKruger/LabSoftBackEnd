const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  ForgotPasswordUseCase,
} = require("../../../../data/useCases/auth/forgot-password");

const forgotPasswordFactory = function () {
  const usuarioRepository = new UsuarioRepository();

  return new ForgotPasswordUseCase(usuarioRepository);
};

exports.forgotPasswordFactory = forgotPasswordFactory;
