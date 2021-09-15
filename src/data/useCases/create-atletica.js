const { AtleticaCursoEntity } = require("../../domain/entities/AtleticaCurso");

class CreateAtleticaUseCase {
  constructor(atleticaRepository, cursoAtleticaRepository) {
    this.atleticaRepository = atleticaRepository;
    this.cursoAtleticaRepository = cursoAtleticaRepository;
  }

  async handle({ id_curso, atletica }) {
    const newAtletica = await this.atleticaRepository.create(atletica);

    const cursoAtletica = new AtleticaCursoEntity({
      id_curso,
      id_atletica: newAtletica.id,
    });

    await this.cursoAtleticaRepository.create(cursoAtletica);

    return newAtletica;
  }
}

exports.CreateAtleticaUseCase = CreateAtleticaUseCase;
