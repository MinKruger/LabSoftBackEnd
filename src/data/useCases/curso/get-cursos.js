class GetCursosUseCase {
  constructor(cursosRepository) {
    this.cursosRepository = cursosRepository;
  }

  handle() {
    return this.cursosRepository.getAll();
  }
}

exports.GetCursosUseCase = GetCursosUseCase;
