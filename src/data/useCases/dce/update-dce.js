const { DCEEntity } = require("../../../domain/entities/DCE");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class UpdateDCEUseCase {
  constructor(DCERepository) {
    this.DCERepository = DCERepository;
  }

  async handle(id, data) {
    const DCE = await this.DCERepository.findById(id);

    if (!DCE) {
      throw new NotFoundException("DCE id not found.");
    }

    const newDCE = new DCEEntity({ ...DCE, ...data });
    delete newDCE.id;

    await this.DCERepository.update(newDCE, { where: { id } });
  }
}

exports.UpdateDCEUseCase = UpdateDCEUseCase;
