const {
  IAtleticaCursoRepository,
} = require("../../domain/interfaces/repositories/IAtleticaCursoRepository");
const { Models } = require("../../infra/database/models");

class AtleticaCursoRepository extends IAtleticaCursoRepository {
  getAll() {
    return Models.AtleticaCursoModel.findAll();
  }

  create(data) {
    return Models.AtleticaCursoModel.create(data);
  }
}

exports.AtleticaCursoRepository = AtleticaCursoRepository;
