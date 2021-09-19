const { AtleticaEntity } = require("../../../domain/entities/Atletica");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class UpdateAtleticaUseCase {
  constructor(atleticaRepository) {
    this.atleticaRepository = atleticaRepository;
  }

  async handle(id, data) {
    const atletica = await this.atleticaRepository.findById(id);

    if (!atletica) {
      throw new NotFoundException("Atletica id not found.");
    }

    const newAtletica = new AtleticaEntity({ ...atletica, ...data });
    delete newAtletica.id;

    await this.atleticaRepository.update(newAtletica, { where: { id } });
  }
}

exports.UpdateAtleticaUseCase = UpdateAtleticaUseCase;
