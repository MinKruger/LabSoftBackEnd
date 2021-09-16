const {
  NotFoundException,
} = require("../../presentation/errors/NotFoundException");

class GetAtleticaByIdUseCase {
  constructor(atleticaRepository) {
    this.atleticaRepository = atleticaRepository;
  }

  async handle(id) {
    const cursoFinded = await this.atleticaRepository.findById(id);

    if (!cursoFinded) {
      throw new NotFoundException("Curso not found.");
    }

    return cursoFinded;
  }
}

exports.GetAtleticaByIdUseCase = GetAtleticaByIdUseCase;
