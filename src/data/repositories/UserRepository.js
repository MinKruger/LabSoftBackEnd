const {
  IUserRepository,
} = require("../../domain/repositories/IUserRepository");
const { Models } = require("../../infra/database/models");

class UserRepository extends IUserRepository {
  getAll() {
    return Models.UserModel.findAll();
  }

  create(data) {
    return Models.UserModel.create(data);
  }
}

exports.UserRepository = UserRepository;
