const { Models } = require("../../infra/database/models");

class ParceiroRepository {
  getAll(options) {
    return Models.ParceiroModel.findAll(options);
  }

  findById(id, options) {
    return Models.ParceiroModel.findByPk(id, options);
  }

  findOne(options) {
    return Models.ParceiroModel.findOne(options);
  }

  create(data) {
    return Models.ParceiroModel.create(data);
  }

  update(data, options) {
    return Models.ParceiroModel.update(data, options);
  }

  deleteById(id) {
    return Models.ParceiroModel.destroy({ where: { id } });
  }
}

exports.ParceiroRepository = ParceiroRepository;
