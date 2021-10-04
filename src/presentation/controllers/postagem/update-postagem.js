const { BadRequestException } = require("../../errors/BadRequestException");

class UpdatePostagemController {
  constructor(updatePostagemUseCase) {
    this.updatePostagemUseCase = updatePostagemUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;
    const { titulo, imagem, descricao, data_evento } = request.body;

    if (!id) {
      throw new BadRequestException("Path param is required.");
    }

    await this.updatePostagemUseCase.handle(id, {
      titulo,
      imagem,
      descricao,
      data_evento,
    });

    response.status(200).end();
  }
}

exports.UpdatePostagemController = UpdatePostagemController;
