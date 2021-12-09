const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class DeleteJogoUseCase {
  constructor(jogosRepository) {
    this.jogosRepository = jogosRepository;
  }

  async handle(id) {
    const jogo = this.jogosRepository.findById(id);

    if (!jogo) {
      throw new NotFoundException("Jogo not found");
    }

    await this.jogosRepository.deleteById(id);
  }
}

exports.DeleteJogoUseCase = DeleteJogoUseCase;
