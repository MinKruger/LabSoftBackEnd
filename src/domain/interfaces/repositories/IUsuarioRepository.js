const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class IUsuarioRepository {
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
    throw new NotImplementedException("Method delete() not implemented");
  }
}

exports.IUsuarioRepository = IUsuarioRepository;
