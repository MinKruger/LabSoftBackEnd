const { BadRequestException } = require("../../errors/BadRequestException");

class DeleteUsuarioController {
  constructor(deleteUsuarioUseCase) {
    this.deleteUsuarioUseCase = deleteUsuarioUseCase;
  }

  async handle(request, response) {
    const { id, login, senha, tipo_usuario } = request.params;

    if (!id) {
      throw new BadRequestException("ID param is required.");
    }

    await this.deleteUsuarioUseCase.handle(id);

    response.status(200).end();
  }
}

exports.DeleteUsuarioController = DeleteUsuarioController;
