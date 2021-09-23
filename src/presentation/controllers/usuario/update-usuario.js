const { BadRequestException } = require("../../errors/BadRequestException");

class UpdateUsuarioController {
  constructor(updateUsuarioUseCase) {
    this.updateUsuarioUseCase = updateUsuarioUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    if (!id) {
      throw new BadRequestException("ID param is required.");
    }

    await this.updateUsuarioUseCase.handle(id, request.body);

    response.status(200).end();
  }
}

exports.UpdateUsuarioController = UpdateUsuarioController;
