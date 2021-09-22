const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class GetUsuarioByIdUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(id) {
    const usuarioFinded = await this.usuarioRepository.findById(id);

    if (!usuarioFinded) {
      throw new NotFoundException("Usuario not found.");
    }

    return usuarioFinded;
  }
}

exports.GetUsuarioByIdUseCase = GetUsuarioByIdUseCase;
