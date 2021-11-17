const { JogoEntity } = require("../../../domain/entities/Jogo");

class CreateJogoUseCase {
  constructor(jogoRepository) {
    this.jogoRepository = jogoRepository;
  }

  async handle(data) {
    let newJogo = new JogoEntity(data);

    newJogo = await this.jogoRepository.create(newJogo);

    return newJogo;
  }
}

exports.CreateJogoUseCase = CreateJogoUseCase;
