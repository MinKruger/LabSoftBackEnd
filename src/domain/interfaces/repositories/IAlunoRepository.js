const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class IAlunoRepository {
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

  delete() {
    throw new NotImplementedException();
  }
}

exports.IAlunoRepository = IAlunoRepository;
