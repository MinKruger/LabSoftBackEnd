class GetAllDCEsUseCase {
  constructor(DCERepository) {
    this.DCERepository = DCERepository;
  }

  handle() {
    return this.DCERepository.getAll();
  }
}

exports.GetAllDCEsUseCase = GetAllDCEsUseCase;
