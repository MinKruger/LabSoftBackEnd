const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class GetJogoByIdUseCase {
  constructor(jogoRepository) {
    this.jogoRepository = jogoRepository;
  }

  async handle(id) {
    const jogoFinded = await this.jogoRepository.findById(id);

    if (!jogoFinded) {
      throw new NotFoundException("Jogo not found.");
    }

    return jogoFinded;
  }
}

exports.GetJogoByIdUseCase = GetJogoByIdUseCase;
