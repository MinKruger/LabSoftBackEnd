const { BadRequestException } = require("../../errors/BadRequestException");

class DeletePostagemController {
  constructor(deletePostagemUseCase) {
    this.deletePostagemUseCase = deletePostagemUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    if (!id) {
      throw new BadRequestException("Path param is required.");
    }

    await this.deletePostagemUseCase.handle(id);

    response.status(200).end();
  }
}

exports.DeletePostagemController = DeletePostagemController;
