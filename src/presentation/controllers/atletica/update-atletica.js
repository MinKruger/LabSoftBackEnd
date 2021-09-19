const { BadRequestException } = require("../../errors/BadRequestException");

class UpdateAtleticasController {
  constructor(updateAtleticaUseCase) {
    this.updateAtleticaUseCase = updateAtleticaUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    if (!id) {
      throw new BadRequestException("Path param is required.");
    }

    await this.updateAtleticaUseCase.handle(id, request.body);

    response.status(200).end();
  }
}

exports.UpdateAtleticasController = UpdateAtleticasController;
