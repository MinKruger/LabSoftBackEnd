const { AtleticaEntity } = require("../../../domain/entities/Atletica");
const {
  AtleticaCursoEntity,
} = require("../../../domain/entities/AtleticaCurso");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class CreateAtleticaUseCase {
  constructor(atleticaRepository, cursoAtleticaRepository, cursoRepository) {
    this.atleticaRepository = atleticaRepository;
    this.cursoAtleticaRepository = cursoAtleticaRepository;
    this.cursoRepository = cursoRepository;
  }

  async handle({ ids_cursos, atletica }) {
    ids_cursos.forEach(async (id) => {
      const cursoFinded = await this.cursoRepository.findById(id);

      if (!cursoFinded) {
        throw new NotFoundException(`id_curso: ${id} not found.`);
      }
    });

    let newAtletica = new AtleticaEntity(atletica);
    newAtletica = await this.atleticaRepository.create(atletica);

    ids_cursos.forEach(async (id) => {
      const cursoAtletica = new AtleticaCursoEntity({
        id_curso: id,
        id_atletica: newAtletica.id,
      });

      await this.cursoAtleticaRepository.create(cursoAtletica);
    });

    return newAtletica;
  }
}

exports.CreateAtleticaUseCase = CreateAtleticaUseCase;
