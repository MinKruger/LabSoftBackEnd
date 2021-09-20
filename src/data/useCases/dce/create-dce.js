const { DCEEntity } = require("../../../domain/entities/DCE");
class CreateDCEUseCase {
  constructor(DCERepository) {
    this.DCERepository = DCERepository;
  }

  async handle(data) {
    let newDCE = new DCEEntity(data);
    newDCE = await this.DCERepository.create(newDCE);

    return newDCE;
  }
}

exports.CreateDCEUseCase = CreateDCEUseCase;
