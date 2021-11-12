class AddParticipantController {
  constructor(addParticipantUseCase) {
    this.addParticipantUseCase = addParticipantUseCase;
  }

  async handle(request, response) {
    await this.addParticipantUseCase.handle(request.body);

    response.status(201).end();
  }
}

exports.AddParticipantController = AddParticipantController;
