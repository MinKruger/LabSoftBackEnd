const { AuthToken } = require('../../../app/providers/AuthToken');
const { Mailer } = require('../../../app/providers/Mailer');
const { NotFoundException } = require("../../../presentation/errors/NotFoundException");

class ForgotPasswordUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(data) {
    const { email } = data;

    const user = await this.usuarioRepository.findOne({where: {email}});

    if (!user) {
      throw new NotFoundException("User Not Found");
    }

    const token = AuthToken.generate({id: user.id});

    await Mailer.sendMail(`Token de recuperação: ${token}`, 'Recuperação de Senha', email);
  }
}

exports.ForgotPasswordUseCase = ForgotPasswordUseCase;