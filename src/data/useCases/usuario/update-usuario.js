const { UsuarioEntity } = require("../../../domain/entities/Usuario");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class UpdateUsuarioUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(id, data) {
    const usuario = await this.usuarioRepository.findById(id);

    if (!usuario) {
      throw new NotFoundException("Usuario not found.");
    }

    const newUsuario = new UsuarioEntity({ ...usuario, ...data });
    delete newUsuario.id;

    await this.usuarioRepository.update(newUsuario, { where: { id } });
  }
}

exports.UpdateUsuarioUseCase = UpdateUsuarioUseCase;
