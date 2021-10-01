class GetAllPostagensController {
  constructor(getAllPostagensController) {
    this.getAllPostagensController = getAllPostagensController;
  }

  async handle(request, response) {
    const atletica = await this.getAllPostagensController.handle();

    response.status(200).json(atletica);
  }
}

exports.GetAllPostagensController = GetAllPostagensController;
