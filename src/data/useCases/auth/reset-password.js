const bcrypt = require('bcrypt');

const { AuthToken } = require('../../../app/providers/AuthToken');
const { NotFoundException } = require("../../../presentation/errors/NotFoundException");
const { UsuarioEntity } = require("../../../domain/entities/Usuario");

class ResetPasswordUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(data) {
    let { senha } = data;

    const { codigo } = data;

    const { id } = AuthToken.authenticate(codigo);

    let user = await this.usuarioRepository.findById(id, { raw: true });
    if (!user) {
      throw new NotFoundException("Invalid token.");
    }

    await bcrypt.hash(senha, process.env.BCRYPT_HASH_ROUNDS || 10).then((hash) => {
      senha = hash;
    });

    console.log(user);

    user = new UsuarioEntity({
      ...user,
      senha
    });

    await this.usuarioRepository.update(user, { where: { id } });
  }
}

exports.ResetPasswordUseCase = ResetPasswordUseCase;
