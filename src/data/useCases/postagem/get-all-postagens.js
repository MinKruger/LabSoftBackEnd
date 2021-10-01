class GetAllPostagensUseCase {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }

  handle() {
    return this.postagemRepository.getAll();
  }
}

exports.GetAllPostagensUseCase = GetAllPostagensUseCase;
