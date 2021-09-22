class GetAllUsuariosController {
  constructor(getAllUsuariosUseCase) {
    this.getAllUsuariosUseCase = getAllUsuariosUseCase;
  }

  async handle(request, response) {
    const usuario = await this.getAllUsuariosUseCase.handle();

    response.status(200).json(usuario);
  }
}

exports.GetAllUsuariosController = GetAllUsuariosController;
