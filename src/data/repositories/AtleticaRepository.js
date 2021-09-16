const {
  IAtleticaRepository,
} = require("../../domain/interfaces/repositories/IAtleticaRepository");
const { Models } = require("../../infra/database/models");

class AtleticaRepository extends IAtleticaRepository {
  getAll() {
    return Models.AtleticaModel.findAll();
  }

  findById(id) {
    return Models.AtleticaModel.findByPk(id);
  }

  create(data) {
    return Models.AtleticaModel.create(data);
  }
}

exports.AtleticaRepository = AtleticaRepository;
