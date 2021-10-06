const { UsuarioEntity } = require("../../../domain/entities/Usuario");
class RegisterUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(data) {

    if(!data.senha) data.senha = process.env.DEFAULT_USER_PASSWORD || 'password';

    let newUsuario = new UsuarioEntity(data);
    newUsuario = await this.usuarioRepository.create(newUsuario);

    return newUsuario;
  }
}

exports.RegisterUseCase = RegisterUseCase;
