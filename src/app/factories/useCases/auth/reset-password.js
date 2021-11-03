const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  ResetPasswordUseCase,
} = require("../../../../data/useCases/auth/reset-password");

const resetPasswordFactory = function () {
  const usuarioRepository = new UsuarioRepository();

  return new ResetPasswordUseCase(usuarioRepository);
};

exports.resetPasswordFactory = resetPasswordFactory;
