const bcrypt = require('bcrypt');
const { UsuarioEntity } = require("../../../domain/entities/Usuario");
const { BadRequestException } = require("../../../presentation/errors/BadRequestException");

class CreateUsuarioUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(data) {
    const { login, senha } = data;

    if (login) {
      const usernameTaken = await this.usuarioRepository.findByUsername(login);
      if (usernameTaken) {
        throw new BadRequestException("Username already taken");
      }
    }

    await bcrypt.hash(senha ? senha : (process.env.DEFAULT_USER_PASSWORD || 'password'), process.env.BCRYPT_HASH_ROUNDS || 10).then((hash) => {
      data.senha = hash;
    });

    const newUsuario = new UsuarioEntity(data);
    await this.usuarioRepository.create(newUsuario);
  }
}

exports.CreateUsuarioUseCase = CreateUsuarioUseCase;
