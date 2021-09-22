const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class DeleteUsuarioUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(id) {
    const usuario = await this.usuarioRepository.findById(id);

    if (!usuario) {
      throw new NotFoundException("Usuario not found.");
    }

    await this.usuarioRepository.deleteById(id);
  }
}

exports.DeleteUsuarioUseCase = DeleteUsuarioUseCase;
