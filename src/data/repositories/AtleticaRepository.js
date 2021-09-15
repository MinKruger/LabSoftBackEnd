const {
  IAtleticaRepository,
} = require("../../domain/interfaces/repositories/IAtleticaRepository");
const { Models } = require("../../infra/database/models");

class AtleticaRepository extends IAtleticaRepository {
  getAll() {
    return Models.AtleticaModel.findAll();
  }

  create(data) {
    return Models.AtleticaModel.create(data);
  }
}

exports.AtleticaRepository = AtleticaRepository;
