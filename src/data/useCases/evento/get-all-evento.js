class GetAllEventosUseCase {
  constructor(eventosRepository) {
    this.eventosRepository = eventosRepository;
  }

  handle() {
    return this.eventosRepository.getAll();
  }
}

exports.GetAllEventosUseCase = GetAllEventosUseCase;
