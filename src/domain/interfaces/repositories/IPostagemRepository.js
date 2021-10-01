const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class IPostagemRepository {
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
}

exports.IPostagemRepository = IPostagemRepository;
