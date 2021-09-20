const { BadRequestException } = require("../../errors/BadRequestException");

class DeleteDCEController {
  constructor(deleteDCEUseCase) {
    this.deleteDCEUseCase = deleteDCEUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    if (!id) {
      throw new BadRequestException("ID param is required.");
    }

    await this.deleteDCEUseCase.handle(id);

    response.status(200).end();
  }
}

exports.DeleteDCEController = DeleteDCEController;
