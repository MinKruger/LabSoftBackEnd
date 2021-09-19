const {
  ICursoRepository,
} = require("../../domain/interfaces/repositories/ICursoRepository");
const { Models } = require("../../infra/database/models");

class CursoRepository extends ICursoRepository {
  findById(id, options) {
    return Models.CursoModel.findByPk(id, options);
  }

  getAll(options) {
    return Models.CursoModel.findAll(options);
  }

  create(data) {
    return Models.CursoModel.create(data);
  }
}

exports.CursoRepository = CursoRepository;
