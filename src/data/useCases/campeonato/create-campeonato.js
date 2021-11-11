const { CampeonatoEntity } = require("../../../domain/entities/Campeonato");

class CreateCampeonatoUseCase {
  constructor(campeonatoRepository) {
    this.campeonatoRepository = campeonatoRepository;
  }

  async handle(data) {
    const campeonato = new CampeonatoEntity(data);

    await this.campeonatoRepository.create(campeonato);
  }
}

exports.CreateCampeonatoUseCase = CreateCampeonatoUseCase;
