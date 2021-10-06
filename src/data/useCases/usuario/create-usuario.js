const bcrypt = require('bcrypt');
const { UsuarioEntity } = require("../../../domain/entities/Usuario");
class CreateUsuarioUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(data) {
    let newUsuario = await bcrypt.hash(data.senha, process.env.BCRYPT_HASH_ROUNDS || 10).then((hash) => {
      data.senha = hash;
      let newUsuario = new UsuarioEntity(data);
      newUsuario = this.usuarioRepository.create(newUsuario);
      return newUsuario;
    });

    return newUsuario;
  }
}

exports.CreateUsuarioUseCase = CreateUsuarioUseCase;
