class GetAllAtleticasUseCase {
  constructor(atleticaRepository) {
    this.atleticaRepository = atleticaRepository;
  }

  async handle() {
    return await this.atleticaRepository.getAll();
  }
}

exports.GetAllAtleticasUseCase = GetAllAtleticasUseCase;
