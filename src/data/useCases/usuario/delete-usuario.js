const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class DeleteUsuarioUseCase {
  constructor(usuarioRepository, alunoRepository) {
    this.usuarioRepository = usuarioRepository;
    this.alunoRepository = alunoRepository;
  }

  async handle(id) {
    const usuario = await this.usuarioRepository.findById(id);

    if (!usuario) {
      throw new NotFoundException("Usuario not found.");
    }

    if(usuario.permissao == "aluno") {
      await this.alunoRepository.deleteByUserId(id);
    }

    await this.usuarioRepository.deleteById(id);
  }
}

exports.DeleteUsuarioUseCase = DeleteUsuarioUseCase;
