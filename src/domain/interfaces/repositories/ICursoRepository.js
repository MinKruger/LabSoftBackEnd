const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class ICursoRepository {
  findById() {
    throw new NotImplementedException();
  }

  create() {
    throw new NotImplementedException();
  }
}

exports.ICursoRepository = ICursoRepository;
