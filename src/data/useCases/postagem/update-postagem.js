const { PostagemEntity } = require("../../../domain/entities/Postagem");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class UpdatePostagemUseCase {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }

  async handle(id, data) {
    const postagem = await this.postagemRepository.findById(id, { raw: true });

    if (!postagem) {
      throw new NotFoundException("Postagem id not found.");
    }

    const newPostagem = new PostagemEntity({ ...postagem, ...data });

    await this.postagemRepository.update(newPostagem, { where: { id } });
  }
}

exports.UpdatePostagemUseCase = UpdatePostagemUseCase;
