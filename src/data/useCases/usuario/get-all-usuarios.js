class GetAllUsuariosUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  handle() {
    return this.usuarioRepository.getAll();
  }
}

exports.GetAllUsuariosUseCase = GetAllUsuariosUseCase;
