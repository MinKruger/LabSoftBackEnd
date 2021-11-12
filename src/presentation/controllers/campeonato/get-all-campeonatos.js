const { BadRequestException } = require("../../errors/BadRequestException");

class GetAllCampeonatosController {
  constructor(getAllCampeonatosUseCase) {
    this.getAllCampeonatosUseCase = getAllCampeonatosUseCase;
  }

  async handle(request, response) {
    const { limit, page, event, modality, status } = request.query;

    if (!limit || !page) {
      throw new BadRequestException("Query param is missing");
    }

    const atletica = await this.getAllCampeonatosUseCase.handle({
      limit: +limit,
      page: +page,
      event,
      modality,
      status,
    });

    response.status(200).json(atletica);
  }
}

exports.GetAllCampeonatosController = GetAllCampeonatosController;
