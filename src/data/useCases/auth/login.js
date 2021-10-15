const bcrypt = require('bcrypt');
const { UsuarioEntity } = require("../../../domain/entities/Usuario");
const { UnauthorizedException } = require("../../../presentation/errors/UnauthorizedException");

class LoginUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(data) {
    let { login, senha } = data;

    const user = await this.usuarioRepository.findOne({where: {login}});
    
    if (!user) {
      throw new UnauthorizedException("Password or User Not Found");
    }

    let result = bcrypt.compareSync(senha, user.senha);

    if(!result)
      throw new UnauthorizedException("Password or User Not Found");
  }
}

exports.LoginUseCase = LoginUseCase;
