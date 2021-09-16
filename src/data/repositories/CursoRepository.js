const {
  ICursoRepository,
} = require("../../domain/interfaces/repositories/ICursoRepository");
const { Models } = require("../../infra/database/models");

class CursoRepository extends ICursoRepository {
  findById(id) {
    return Models.CursoModel.findByPk(id);
  }

  create(data) {
    return Models.CursoModel.create(data);
  }
}

exports.CursoRepository = CursoRepository;
