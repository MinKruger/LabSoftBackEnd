const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class DeletePostagemUseCase {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }

  async handle(id) {
    const postagem = await this.postagemRepository.findById(id);

    if (!postagem) {
      throw new NotFoundException("Postagem id not found.");
    }

    await this.postagemRepository.deleteById(id);
  }
}

exports.DeletePostagemUseCase = DeletePostagemUseCase;
