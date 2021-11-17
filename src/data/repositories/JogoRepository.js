const {
  IJogoRepository,
} = require("../../domain/interfaces/repositories/IJogoRepository");
const { Models } = require("../../infra/database/models");

class JogoRepository extends IJogoRepository {
  getAll(options) {
    return Models.JogoModel.findAll(options);
  }

  findById(id, options) {
    return Models.JogoModel.findByPk(id, options);
  }

  create(data) {
    return Models.JogoModel.create(data);
  }

  update(data, options) {
    return Models.JogoModel.update(data, options);
  }
}

exports.JogoRepository = JogoRepository;
