const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  AtleticaRepository,
} = require("../../../../data/repositories/AtleticaRepository");
const {
  CreateUsuarioUseCase,
} = require("../../../../data/useCases/usuario/create-usuario");

const createUsuarioFactory = function () {
  const usuarioRepository = new UsuarioRepository();
  const atleticaRepository = new AtleticaRepository();

  return new CreateUsuarioUseCase(usuarioRepository, atleticaRepository);
};

exports.createUsuarioFactory = createUsuarioFactory;
