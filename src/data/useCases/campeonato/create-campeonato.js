const { CampeonatoEntity } = require("../../../domain/entities/Campeonato");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class CreateCampeonatoUseCase {
  constructor(
    campeonatoRepository,
    atleticaRepository,
    eventoRepository,
    modalidadeRepository
  ) {
    this.campeonatoRepository = campeonatoRepository;
    this.atleticaRepository = atleticaRepository;
    this.eventoRepository = eventoRepository;
    this.modalidadeRepository = modalidadeRepository;
  }

  async handle(data) {
    const campeonato = new CampeonatoEntity(data);

    if (data.id_evento) {
      const evento = await this.eventoRepository.findById(data.id_evento);

      if (!evento) {
        throw new NotFoundException("Evento not found");
      }
    }

    if (data.id_modalidade) {
      const modalidade = await this.modalidadeRepository.findById(
        data.id_modalidade
      );

      if (!modalidade) {
        throw new NotFoundException("Modalidade not found");
      }
    }

    if (data.id_vencedor) {
      const vencedor = await this.atleticaRepository.findById(data.id_vencedor);

      if (!vencedor) {
        throw new NotFoundException("Vencedor not found");
      }
    }

    await this.campeonatoRepository.create(campeonato);
  }
}

exports.CreateCampeonatoUseCase = CreateCampeonatoUseCase;
