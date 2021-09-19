const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class ICursoRepository {
  findById() {
    throw new NotImplementedException("Method not implemented");
  }

  create() {
    throw new NotImplementedException("Method not implemented");
  }
}

exports.ICursoRepository = ICursoRepository;
