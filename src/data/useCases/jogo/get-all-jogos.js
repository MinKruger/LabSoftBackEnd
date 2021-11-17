class GetAllJogosUseCase {
  constructor(jogoRepository) {
    this.jogoRepository = jogoRepository;
  }

  handle() {
    return this.jogoRepository.getAll();
  }
}

exports.GetAllJogosUseCase = GetAllJogosUseCase;
