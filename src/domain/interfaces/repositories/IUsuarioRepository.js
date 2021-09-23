const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class IUsuarioRepository {
  getAll() {
    throw new NotImplementedException("Method getAll() not implemented");
  }

  findById() {
    throw new NotImplementedException("Method findById() not implemented");
  }

  create() {
    throw new NotImplementedException("Method create() not implemented");
  }

  update() {
    throw new NotImplementedException("Method update() not implemented");
  }

  delete() {
    throw new NotImplementedException("Method delete() not implemented");
  }
}

exports.IUsuarioRepository = IUsuarioRepository;
