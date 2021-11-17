const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");
const { JogoEntity } = require("../../../domain/entities/Jogo");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class UpdateJogoUseCase {
  constructor(jogoRepository) {
    this.jogoRepository = jogoRepository;
  }

  async handle(id, data) {
    const jogo = await this.jogoRepository.findById(id, { raw: true });

    if (!jogo) {
      throw new NotFoundException("Jogo id not found.");
    }

    delete data.id;

    const newJogo = new JogoEntity({
      ...jogo,
      ...data,
    });

    await this.jogoRepository.update(newJogo, { where: { id } });
  }
}

exports.UpdateJogoUseCase = UpdateJogoUseCase;
