const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class IParticipanteRepository {
  getAll() {
    throw new NotImplementedException();
  }

  findById() {
    throw new NotImplementedException();
  }

  create() {
    throw new NotImplementedException();
  }

  update() {
    throw new NotImplementedException();
  }
}

exports.IParticipanteRepository = IParticipanteRepository;
