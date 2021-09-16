const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class IAtleticaRepository {
  getAll() {
    throw new NotImplementedException("Method not implemented");
  }

  findById() {
    throw new NotImplementedException("Method not implemented");
  }

  create() {
    throw new NotImplementedException("Method not implemented");
  }
}

exports.IAtleticaRepository = IAtleticaRepository;
