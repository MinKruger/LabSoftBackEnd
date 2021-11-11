const { CampeonatoEntity } = require("../../../domain/entities/Campeonato");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class UpdateCampeonatoUseCase {
  constructor(campeonatoRepository) {
    this.campeonatoRepository = campeonatoRepository;
  }

  async handle(data, id) {
    console.log(id);
    const campeonato = await this.campeonatoRepository.findById(id);
    if (!campeonato) {
      throw new NotFoundException("Campeonato not found");
    }

    const campeonatoUpdated = new CampeonatoEntity({ ...campeonato, ...data });

    await this.campeonatoRepository.update(campeonatoUpdated, {
      where: { id },
    });
  }
}

exports.UpdateCampeonatoUseCase = UpdateCampeonatoUseCase;
