class GetAllModalidadesUseCase {
  constructor(modalidadeRepository) {
    this.modalidadeRepository = modalidadeRepository;
  }

  handle() {
    return this.modalidadeRepository.getAll();
  }
}

exports.GetAllModalidadesUseCase = GetAllModalidadesUseCase;
