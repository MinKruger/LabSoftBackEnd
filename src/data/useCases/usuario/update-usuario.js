const bcrypt = require('bcrypt');
const { UsuarioEntity } = require("../../../domain/entities/Usuario");
const { NotFoundException } = require("../../../presentation/errors/NotFoundException");
const { BadRequestException } = require("../../../presentation/errors/BadRequestException");

class UpdateUsuarioUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(id, data) {
    const usuarioExists = await this.usuarioRepository.findById(id);
    const { email, senha } = data;

    if (!usuarioExists) {
      throw new NotFoundException("Usuario not found.");
    }

    if (email) {
      const emailRegistered = await this.usuarioRepository.findOne({where: {email}});
      if (emailRegistered) {
        throw new BadRequestException("Email already registered");
      }
    } else {
      data.email = usuarioExists.email;
    }

    if (senha) {
      await bcrypt.hash(senha, process.env.BCRYPT_HASH_ROUNDS || 10).then((hash) => {
        data.senha = hash;
      });
    }

    const updatedUsuario = new UsuarioEntity({ ...data });
    delete updatedUsuario.id;
    await this.usuarioRepository.update(updatedUsuario, { where: { id } });
  }
}

exports.UpdateUsuarioUseCase = UpdateUsuarioUseCase;
