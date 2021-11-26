class GetAllParceirosUseCase {
  constructor(parceirosRepository) {
    this.parceirosRepository = parceirosRepository;
  }

  handle() {
    return this.parceirosRepository.getAll();
  }
}

exports.GetAllParceirosUseCase = GetAllParceirosUseCase;
