class DeleteParceirosController {
  constructor(deleteParceirosUseCase) {
    this.deleteParceirosUseCase = deleteParceirosUseCase;
  }

  async handle(request, response) {
    const id = request.params.id;
    await this.deleteParceirosUseCase.handle(id);

    response.status(200).end();
  }
}

exports.DeleteParceirosController = DeleteParceirosController;
