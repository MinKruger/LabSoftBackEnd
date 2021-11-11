const {
  NotImplementedException,
} = require("../../../presentation/errors/NotImplementedException");

class ICampeonatoRepository {
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

exports.ICampeonatoRepository = ICampeonatoRepository;
