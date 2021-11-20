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
  UpdateUsuarioUseCase,
} = require("../../../../data/useCases/usuario/update-usuario");

const updateUsuarioFactory = function () {
  const usuarioRepository = new UsuarioRepository();
  const atleticaRepository = new AtleticaRepository();
  const alunoRepository = new AlunoRepository();
  const cursoRepository = new CursoRepository();

  return new UpdateUsuarioUseCase(usuarioRepository, atleticaRepository, alunoRepository, cursoRepository);
};

exports.updateUsuarioFactory = updateUsuarioFactory;
