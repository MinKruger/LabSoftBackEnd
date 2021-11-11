const {
  ICampeonatoRepository,
} = require("../../domain/interfaces/repositories/ICampeonatoRepository");
const { Models } = require("../../infra/database/models");

class CampeonatoRepository extends ICampeonatoRepository {
  findById(id, options) {
    return Models.CampeonatoModel.findByPk(id, options);
  }

  getAll(options) {
    return Models.CampeonatoModel.findAll(options);
  }

  create(data) {
    return Models.CampeonatoModel.create(data);
  }
}

exports.CampeonatoRepository = CampeonatoRepository;
