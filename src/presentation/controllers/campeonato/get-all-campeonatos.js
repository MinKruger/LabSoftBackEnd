const { BadRequestException } = require("../../errors/BadRequestException");

class GetAllCampeonatosController {
  constructor(getAllCampeonatosUseCase) {
    this.getAllCampeonatosUseCase = getAllCampeonatosUseCase;
  }

  async handle(request, response) {
    const { limit, page, id_evento, id_modalidade, status } = request.query;

    if (!limit || !page) {
      throw new BadRequestException("Query param is missing");
    }

    const atletica = await this.getAllCampeonatosUseCase.handle({
      limit: +limit,
      page: +page,
      id_evento,
      id_modalidade,
      status,
    });

    response.status(200).json(atletica);
  }
}

exports.GetAllCampeonatosController = GetAllCampeonatosController;
