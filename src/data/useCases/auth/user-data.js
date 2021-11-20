const {
  UnauthorizedException,
} = require("../../../presentation/errors/UnauthorizedException");

class UserDataUseCase {
  constructor(usuarioRepository, atleticaRepository, alunoRepository) {
    this.usuarioRepository = usuarioRepository;
    this.atleticaRepository = atleticaRepository;
    this.alunoRepository = alunoRepository;
  }

  async handle(userID) {
    const user = await this.usuarioRepository.findOne({
      where: { id: userID },
      raw: true,
    });
    delete user.senha;

    if (user.permissao == "aluno") {
      user.aluno = await this.alunoRepository.findOne({
        where: { id_usuario: user.id },
        raw: true,
      });
      delete user.aluno.id_usuario;
    } else if (user.permissao == "atletica") {
      user.atletica = await this.atleticaRepository.findOne({
        where: { id: user.id_atletica },
        raw: true,
      });
      delete user.id_atletica;
    }

    return user;
  }
}

exports.UserDataUseCase = UserDataUseCase;
