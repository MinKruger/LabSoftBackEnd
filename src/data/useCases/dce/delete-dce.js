const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class DeleteDCEUseCase {
  constructor(DCERepository) {
    this.DCERepository = DCERepository;
  }

  async handle(id) {
    const DCE = await this.DCERepository.findById(id);

    if (!DCE) {
      throw new NotFoundException("DCE id not found.");
    }

    await this.DCERepository.deleteById(id);
  }
}

exports.DeleteDCEUseCase = DeleteDCEUseCase;
