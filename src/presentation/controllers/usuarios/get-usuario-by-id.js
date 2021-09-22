class GetUsuarioByIdController {
  constructor(getUsuarioByIdUseCase) {
    this.getUsuarioByIdUseCase = getUsuarioByIdUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    if (!id) {
      throw new BadRequestException("ID param is required.");
    }

    const usuario = await this.getUsuarioByIdUseCase.handle(id);

    response.status(200).json(usuario);
  }
}

exports.GetUsuarioByIdController = GetUsuarioByIdController;
