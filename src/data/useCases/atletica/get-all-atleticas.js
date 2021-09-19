class GetAllAtleticasUseCase {
  constructor(atleticaRepository) {
    this.atleticaRepository = atleticaRepository;
  }

  async handle() {
    const cursoFinded = await this.atleticaRepository.getAll();

    return cursoFinded;
  }
}

exports.GetAllAtleticasUseCase = GetAllAtleticasUseCase;
