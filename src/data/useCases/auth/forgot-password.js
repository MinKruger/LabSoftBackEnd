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
    const url = `http://${process.env.FRONT_END_HOST+process.env.FRONT_END_RESET_PASSWORD_ROUTE}?token=${encodeURIComponent(token)}`;
    const title = "Recuperação de senha";
    const body = `Acesse o link para cadastrar uma nova senha: ${url}`;

    await Mailer.sendMail(body, title, email);
  }
}

exports.ForgotPasswordUseCase = ForgotPasswordUseCase;
