class GetAllAtleticasUseCase {
  constructor(atleticaRepository) {
    this.atleticaRepository = atleticaRepository;
  }

  handle() {
    return this.atleticaRepository.getAll();
  }
}

exports.GetAllAtleticasUseCase = GetAllAtleticasUseCase;
