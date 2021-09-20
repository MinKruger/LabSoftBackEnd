const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class IDCERepository {
  getAll() {
    throw new NotImplementedException("Method not implemented");
  }

  findById() {
    throw new NotImplementedException("Method not implemented");
  }

  create() {
    throw new NotImplementedException("Method not implemented");
  }

  update() {
    throw new NotImplementedException("Method not implemented");
  }

  delete() {
    throw new NotImplementedException("Method not implemented");
  }
}

exports.IDCERepository = IDCERepository;
