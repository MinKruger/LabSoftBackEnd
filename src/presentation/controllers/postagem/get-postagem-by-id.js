class GetPostagemByIdController {
  constructor(getPostagemByIdUseCase) {
    this.getPostagemByIdUseCase = getPostagemByIdUseCase;
  }

  async handle(request, response) {
    const { id } = request.params;

    const postagem = await this.getPostagemByIdUseCase.handle(id);

    response.status(200).json(postagem);
  }
}

exports.GetPostagemByIdController = GetPostagemByIdController;
