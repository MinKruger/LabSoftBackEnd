const {
  UsuarioRepository,
} = require("../../../../data/repositories/UsuarioRepository");
const {
  AtleticaRepository,
} = require("../../../../data/repositories/AtleticaRepository");
const {
  UpdateUsuarioUseCase,
} = require("../../../../data/useCases/usuario/update-usuario");

const updateUsuarioFactory = function () {
  const usuarioRepository = new UsuarioRepository();
  const atleticaRepository = new AtleticaRepository();

  return new UpdateUsuarioUseCase(usuarioRepository, atleticaRepository);
};

exports.updateUsuarioFactory = updateUsuarioFactory;
