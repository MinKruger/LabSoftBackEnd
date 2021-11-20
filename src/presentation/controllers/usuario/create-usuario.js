const { BadRequestException } = require("../../errors/BadRequestException");
class CreateUsuarioController {
  constructor(createUsuarioUseCase) {
    this.createUsuarioUseCase = createUsuarioUseCase;
  }

  async handle(request, response) {
    const { email, nome, permissao } = request.body;
    request.body.host = request.headers.host;

    if (!email) {
      throw new BadRequestException("Email param is required.");
    }

    if (!nome) {
      throw new BadRequestException("Nome param is required.");
    }

    if (!permissao) {
      throw new BadRequestException("Permissao param is required.");
    }

    await this.createUsuarioUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.CreateUsuarioController = CreateUsuarioController;
