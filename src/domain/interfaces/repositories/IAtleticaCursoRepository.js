const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class IAtleticaCursoRepository {
  getAll() {
    throw new NotImplementedException("Method not implemented");
  }

  create() {
    throw new NotImplementedException("Method not implemented");
  }
}

exports.IAtleticaCursoRepository = IAtleticaCursoRepository;
