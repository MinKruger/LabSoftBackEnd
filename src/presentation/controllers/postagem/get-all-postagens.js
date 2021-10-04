const { BadRequestException } = require("../../errors/BadRequestException");

class GetAllPostagensController {
  constructor(getAllPostagensUseCase) {
    this.getAllPostagensUseCase = getAllPostagensUseCase;
  }

  async handle(request, response) {
    const { limit, page, type } = request.query;

    if (!limit || !page || !type)
      throw new BadRequestException("Query param is missing");

    const atletica = await this.getAllPostagensUseCase.handle({
      limit: +limit,
      page: +page,
      type,
    });

    response.status(200).json(atletica);
  }
}

exports.GetAllPostagensController = GetAllPostagensController;
