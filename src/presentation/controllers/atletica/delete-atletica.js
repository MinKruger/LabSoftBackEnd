const { BadRequestException } = require("../../errors/BadRequestException");

class DeleteAtleticaController {
  constructor(deleteAtleticaUseCase) {
    this.deleteAtleticaUseCase = deleteAtleticaUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    if (!id) {
      throw new BadRequestException("Path param is required.");
    }

    await this.deleteAtleticaUseCase.handle(id);

    response.status(200).end();
  }
}

exports.DeleteAtleticaController = DeleteAtleticaController;
