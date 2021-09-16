const { AtleticaCursoEntity } = require("../../domain/entities/AtleticaCurso");
const {
  NotFoundException,
} = require("../../presentation/errors/NotFoundException");

class CreateAtleticaUseCase {
  constructor(atleticaRepository, cursoAtleticaRepository, cursoRepository) {
    this.atleticaRepository = atleticaRepository;
    this.cursoAtleticaRepository = cursoAtleticaRepository;
    this.cursoRepository = cursoRepository;
  }

  async handle({ id_curso, atletica }) {
    const cursoFinded = await this.cursoRepository.findById(id_curso);

    if (!cursoFinded) {
      throw new NotFoundException("id_curso not found.");
    }

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
