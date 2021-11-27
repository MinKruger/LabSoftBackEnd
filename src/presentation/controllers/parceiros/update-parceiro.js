class UpdateParceirosController {
  constructor(updateParceirosUseCase) {
    this.updateParceirosUseCase = updateParceirosUseCase;
  }

  async handle(request, response) {
    const id = request.params.id;
    request.body.host = process.env.HOST_PREFIX + request.headers.host;
    await this.updateParceirosUseCase.handle(id, request.body);

    response.status(200).end();
  }
}

exports.UpdateParceirosController = UpdateParceirosController;
