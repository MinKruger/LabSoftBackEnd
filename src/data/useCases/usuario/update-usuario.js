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
    const { login, senha } = data;

    if (!usuarioExists) {
      throw new NotFoundException("Usuario not found.");
    }

    if (login) {
      const usernameTaken = await this.usuarioRepository.findByUsername(login);
      if (usernameTaken) {
        throw new BadRequestException("Username already taken");
      }
    } else {
      data.login = usuarioExists.login;
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
