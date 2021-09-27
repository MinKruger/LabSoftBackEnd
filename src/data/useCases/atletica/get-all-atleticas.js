class GetAllAtleticasUseCase {
  constructor(atleticaRepository) {
    this.atleticaRepository = atleticaRepository;
  }

  handle() {
    return this.atleticaRepository.getAll({ where: { ativo: true } });
  }
}

exports.GetAllAtleticasUseCase = GetAllAtleticasUseCase;
