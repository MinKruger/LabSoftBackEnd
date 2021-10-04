const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class IAtleticaCursoRepository {
  getAll() {
    throw new NotImplementedException();
  }

  create() {
    throw new NotImplementedException();
  }
}

exports.IAtleticaCursoRepository = IAtleticaCursoRepository;
