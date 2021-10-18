const bcrypt = require('bcrypt');
const { UsuarioEntity } = require("../../../domain/entities/Usuario");
const { BadRequestException } = require("../../../presentation/errors/BadRequestException");

class RegisterUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(data) {
    const { email, senha } = data;

    const emailRegistered = await this.usuarioRepository.findOne({where: {email}});
    if (emailRegistered) {
      throw new BadRequestException("Email already registered");
    }
    
    await bcrypt.hash(senha, process.env.BCRYPT_HASH_ROUNDS || 10).then((hash) => {
      data.senha = hash;
    });

    const newUsuario = new UsuarioEntity(data);
    await this.usuarioRepository.create(newUsuario);
  }
}

exports.RegisterUseCase = RegisterUseCase;
