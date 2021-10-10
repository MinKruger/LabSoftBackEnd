const { AtleticaEntity } = require("../../../domain/entities/Atletica");
const {
  BadRequestException,
} = require("../../../presentation/errors/BadRequestException");
class CreateAtleticaUseCase {
  constructor(atleticaRepository, cursoAtleticaRepository, cursoRepository) {
    this.atleticaRepository = atleticaRepository;
    this.cursoAtleticaRepository = cursoAtleticaRepository;
    this.cursoRepository = cursoRepository;
  }

  async handle(data) {
    let newAtletica = new AtleticaEntity(data);

    const atleticaExists = await this.atleticaRepository.findByName(
      newAtletica.nome
    );

    if (atleticaExists) {
      throw new BadRequestException("Atletica already exists");
    }

    newAtletica = await this.atleticaRepository.create(newAtletica);

    return newAtletica;
  }
}

exports.CreateAtleticaUseCase = CreateAtleticaUseCase;
