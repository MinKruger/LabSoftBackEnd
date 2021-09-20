const {
  IDCERepository,
} = require("../../domain/interfaces/repositories/IDCERepository");
const { Models } = require("../../infra/database/models");

class DCERepository extends IDCERepository {
  getAll(options) {
    return Models.DCEModel.findAll(options);
  }

  findById(id, options) {
    return Models.DCEModel.findByPk(id, options);
  }

  create(data) {
    return Models.DCEModel.create(data);
  }

  update(data, options) {
    return Models.DCEModel.update(data, options);
  }

  delete(id) {
    return Models.DCEModel.destroy({ where: { id } });
  }
}

exports.DCERepository = DCERepository;
