class UpdateCampeonatoController {
  constructor(updateCampeonatoUseCase) {
    this.updateCampeonatoUseCase = updateCampeonatoUseCase;
  }

  async handle(request, response) {
    const id = request.params.id;
    await this.updateCampeonatoUseCase.handle(request.body, id);

    response.status(200).end();
  }
}

exports.UpdateCampeonatoController = UpdateCampeonatoController;
