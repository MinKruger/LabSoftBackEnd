class GetAllPostagensUseCase {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }

  async handle({ limit, page, type }) {
    const totalItems = await this.postagemRepository.count({
      where: { tipo: type },
    });

    const postagens = await this.postagemRepository.getAll({
      limit,
      offset: (page - 1) * limit,
      order: [["created_at", "DESC"]],
      where: { tipo: type },
    });

    return {
      posts: postagens,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
    };
  }
}

exports.GetAllPostagensUseCase = GetAllPostagensUseCase;
