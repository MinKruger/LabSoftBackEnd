const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class DeleteParceiroUseCase {
  constructor(parceirosRepository) {
    this.parceirosRepository = parceirosRepository;
  }

  async handle(id) {
    const parceiro = this.parceirosRepository.findById(id);

    if (!parceiro) {
      throw new NotFoundException("Parceiro not found");
    }

    await this.parceirosRepository.deleteById(id);
  }
}

exports.DeleteParceiroUseCase = DeleteParceiroUseCase;
