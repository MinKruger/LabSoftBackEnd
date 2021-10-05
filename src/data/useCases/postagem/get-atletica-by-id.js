const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class GetPostagemByIdUseCase {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }

  async handle(id) {
    const postagemFinded = await this.postagemRepository.findById(id);

    if (!postagemFinded) {
      throw new NotFoundException("Postagem not found.");
    }

    return postagemFinded;
  }
}

exports.GetPostagemByIdUseCase = GetPostagemByIdUseCase;
