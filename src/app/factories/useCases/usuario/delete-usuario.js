const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  AlunoRepository,
} = require("../../../../data/repositories/AlunoRepository");
const {
  DeleteUsuarioUseCase,
} = require("../../../../data/useCases/usuario/delete-usuario");

const deleteUsuarioFactory = function () {
  const usuarioRepository = new UsuarioRepository();
  const alunoRepository = new AlunoRepository();

  return new DeleteUsuarioUseCase(usuarioRepository, alunoRepository);
};

exports.deleteUsuarioFactory = deleteUsuarioFactory;
