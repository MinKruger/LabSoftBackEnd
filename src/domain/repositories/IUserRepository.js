const {
  NotImplementedException,
} = require("../../presentation/errors/NotImplementedException");

class IUserRepository {
  getAll() {
    throw new NotImplementedException("Method not implemented");
  }

  create() {
    throw new NotImplementedException("Method not implemented");
  }
}

exports.IUserRepository = IUserRepository;
