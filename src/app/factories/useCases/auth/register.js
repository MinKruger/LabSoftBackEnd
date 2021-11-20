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
  CursoRepository,
} = require("../../../../data/repositories/CursoRepository");
const {
  RegisterUseCase,
} = require("../../../../data/useCases/auth/register");

const registerFactory = function () {
  const usuarioRepository = new UsuarioRepository();
  const atleticaRepository = new AtleticaRepository();
  const alunoRepository = new AlunoRepository();
  const cursoRepository = new CursoRepository();

  return new RegisterUseCase(usuarioRepository, atleticaRepository, alunoRepository, cursoRepository);
};

exports.registerFactory = registerFactory;
