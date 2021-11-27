class GetAllParceirosController {
  constructor(getAllParceirosUseCase) {
    this.getAllParceirosUseCase = getAllParceirosUseCase;
  }

  async handle(request, response) {
    const parceiros = await this.getAllParceirosUseCase.handle();

    response.status(200).json(parceiros);
  }
}

exports.GetAllParceirosController = GetAllParceirosController;
