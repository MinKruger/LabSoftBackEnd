class GetAllCampeonatosUseCase {
  constructor(campeonatoRepository) {
    this.campeonatoRepository = campeonatoRepository;
  }

  async handle({ limit, page, id_evento, id_modalidade, status }) {
    const query = {};

    if (id_evento) {
      query.id_evento = id_evento;
    }
    if (id_modalidade) {
      query.id_modalidade = id_modalidade;
    }
    if (status) {
      query.status = status;
    }

    const totalItems = await this.campeonatoRepository.count({
      where: query,
    });

    const campeonatos = await this.campeonatoRepository.getAll({
      limit,
      offset: (page - 1) * limit,
      order: [["created_at", "DESC"]],
      where: query,
    });

    return {
      campeonatos: campeonatos,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
    };
  }
}

exports.GetAllCampeonatosUseCase = GetAllCampeonatosUseCase;
