const { AtleticaEntity } = require("../../../domain/entities/Atletica");
class CreateAtleticaUseCase {
  constructor(atleticaRepository, cursoAtleticaRepository, cursoRepository) {
    this.atleticaRepository = atleticaRepository;
    this.cursoAtleticaRepository = cursoAtleticaRepository;
    this.cursoRepository = cursoRepository;
  }

  async handle(data) {
    let newAtletica = new AtleticaEntity(data);
    newAtletica = await this.atleticaRepository.create(newAtletica);

    return newAtletica;
  }
}

exports.CreateAtleticaUseCase = CreateAtleticaUseCase;
