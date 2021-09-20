const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class GetDCEByIdUseCase {
  constructor(DCERepository) {
    this.DCERepository = DCERepository;
  }

  async handle(id) {
    const DCEFinded = await this.DCERepository.findById(id);

    if (!DCEFinded) {
      throw new NotFoundException("DCE not found.");
    }

    return DCEFinded;
  }
}

exports.GetDCEByIdUseCase = GetDCEByIdUseCase;
