const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class IPostagemRepository {
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
}

exports.IPostagemRepository = IPostagemRepository;
