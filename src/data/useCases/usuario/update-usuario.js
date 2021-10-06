const bcrypt = require('bcrypt');
const { UsuarioEntity } = require("../../../domain/entities/Usuario");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class UpdateUsuarioUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(id, data) {
    const usuario = await this.usuarioRepository.findById(id);

    if (!usuario) {
      throw new NotFoundException("Usuario not found.");
    }

    await bcrypt.hash(data.senha, process.env.BCRYPT_HASH_ROUNDS || 10).then((hash) => {
      data.senha = hash;
      const updatedUsuario = new UsuarioEntity({ ...usuario, ...data });
      delete updatedUsuario.id;
      this.usuarioRepository.update(updatedUsuario, { where: { id } });
    });
  }
}

exports.UpdateUsuarioUseCase = UpdateUsuarioUseCase;
