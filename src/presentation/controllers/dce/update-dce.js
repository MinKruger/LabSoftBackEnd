const { BadRequestException } = require("../../errors/BadRequestException");

class UpdateDCEController {
  constructor(updateDCEUseCase) {
    this.updateDCEUseCase = updateDCEUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    if (!id) {
      throw new BadRequestException("ID param is required.");
    }

    await this.updateDCEUseCase.handle(id, request.body);

    response.status(200).end();
  }
}

exports.UpdateDCEController = UpdateDCEController;
