const { AtleticaEntity } = require("../../domain/entities/Atletica");

class CreateAtleticaController {
  constructor(createAtleticaUseCase) {
    this.createAtleticaUseCase = createAtleticaUseCase;
  }

  async handle(request, response) {
    const { id_curso, ...rest } = request.body;
    const atletica = new AtleticaEntity(rest);

    await this.createAtleticaUseCase.handle({
      atletica,
      id_curso,
    });

    response.status(201).end();
  }
}

exports.CreateAtleticaController = CreateAtleticaController;
