const { AtleticaEntity } = require("../../domain/entities/Atletica");
const { BadRequestException } = require("../errors/BadRequestException");

class CreateAtleticaController {
  constructor(createAtleticaUseCase) {
    this.createAtleticaUseCase = createAtleticaUseCase;
  }

  async handle(request, response) {
    const { ids_cursos, ...rest } = request.body;

    if (!ids_cursos || !ids_cursos.length) {
      throw new BadRequestException("Property ids_cursos is required");
    }

    const atletica = new AtleticaEntity(rest);

    await this.createAtleticaUseCase.handle({
      atletica,
      ids_cursos,
    });

    response.status(201).end();
  }
}

exports.CreateAtleticaController = CreateAtleticaController;
