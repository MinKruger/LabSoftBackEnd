const bcrypt = require('bcrypt');

const { AuthToken } = require('../../../app/providers/AuthToken');
const { NotFoundException } = require("../../../presentation/errors/NotFoundException");

class ResetPasswordUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(data) {
    let { senha } = data;

    const { token } = data;

    const { id } = AuthToken.authenticate(token);

    const user = await this.usuarioRepository.findById(id);
    if (!user) {
      throw new NotFoundException("Invalid token.");
    }

    await bcrypt.hash(senha, process.env.BCRYPT_HASH_ROUNDS || 10).then((hash) => {
      senha = hash;
    });

    await this.usuarioRepository.update(senha, { where: { id } });
  }
}

exports.ResetPasswordUseCase = ResetPasswordUseCase;
