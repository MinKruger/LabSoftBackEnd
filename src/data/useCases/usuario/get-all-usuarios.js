class GetAllUsuariosUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  handle() {
    return this.usuarioRepository.getAll({
      attributes: { exclude: ["senha"] },
    });
  }
}

exports.GetAllUsuariosUseCase = GetAllUsuariosUseCase;
