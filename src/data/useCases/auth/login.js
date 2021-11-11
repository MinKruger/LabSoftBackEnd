const bcrypt = require("bcrypt");
const { AuthToken } = require("../../../app/providers/AuthToken");
const { UsuarioEntity } = require("../../../domain/entities/Usuario");
const {
  UnauthorizedException,
} = require("../../../presentation/errors/UnauthorizedException");

class LoginUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(data) {
    const { email, senha } = data;

    const user = await this.usuarioRepository.findOne({
      where: { email },
      raw: true,
    });

    if (!user) {
      throw new UnauthorizedException("Password or User Not Found");
    }

    const result = bcrypt.compareSync(senha, user.senha);

    if (!result) {
      throw new UnauthorizedException("Password or User Not Found");
    }

    const token = AuthToken.generate({ id: user.id });

    delete user.id;
    delete user.senha;

    return { token, user };
  }
}

exports.LoginUseCase = LoginUseCase;
