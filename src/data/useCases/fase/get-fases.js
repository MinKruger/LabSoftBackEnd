class GetFasesUseCase {
  constructor(fasesRepository) {
    this.fasesRepository = fasesRepository;
  }

  handle() {
    return this.fasesRepository.getAll();
  }
}

exports.GetFasesUseCase = GetFasesUseCase;
