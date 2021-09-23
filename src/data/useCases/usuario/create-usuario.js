const { UsuarioEntity } = require("../../../domain/entities/Usuario");
class CreateUsuarioUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(data) {
    let newUsuario = new UsuarioEntity(data);
    newUsuario = await this.usuarioRepository.create(newUsuario);

    return newUsuario;
  }
}

exports.CreateUsuarioUseCase = CreateUsuarioUseCase;
