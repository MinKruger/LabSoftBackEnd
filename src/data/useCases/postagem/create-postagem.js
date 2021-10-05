const { PostagemEntity } = require("../../../domain/entities/Postagem");

class CreatePostagemUseCase {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }

  async handle(data) {
    let newPostagem = new PostagemEntity(data);
    newPostagem = await this.postagemRepository.create(newPostagem);

    return newPostagem;
  }
}

exports.CreatePostagemUseCase = CreatePostagemUseCase;
