const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  AtleticaRepository,
} = require("../../../../data/repositories/AtleticaRepository");
const {
  AlunoRepository,
} = require("../../../../data/repositories/AlunoRepository");
const {
  UserDataUseCase,
} = require("../../../../data/useCases/auth/user-data");

const userDataFactory = function () {
  const usuarioRepository = new UsuarioRepository();
  const atleticaRepository = new AtleticaRepository();
  const alunoRepository = new AlunoRepository();

  return new UserDataUseCase(usuarioRepository, atleticaRepository, alunoRepository);
};

exports.userDataFactory = userDataFactory;
