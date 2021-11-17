const { BadRequestException } = require("../../errors/BadRequestException");

class UpdateJogoController {
  constructor(updateJogoUseCase) {
    this.updateJogoUseCase = updateJogoUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    if (!id) {
      throw new BadRequestException("Id param is required.");
    }

    await this.updateJogoUseCase.handle(id, request.body);

    response.status(200).end();
  }
}

exports.UpdateJogoController = UpdateJogoController;
