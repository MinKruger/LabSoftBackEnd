const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class DeleteAtleticaUseCase {
  constructor(atleticaRepository) {
    this.atleticaRepository = atleticaRepository;
  }

  async handle(id) {
    const atletica = await this.atleticaRepository.findById(id);

    if (!atletica) {
      throw new NotFoundException("Atletica id not found.");
    }

    await this.atleticaRepository.update({ ativo: false }, { where: { id } });
  }
}

exports.DeleteAtleticaUseCase = DeleteAtleticaUseCase;
