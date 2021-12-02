const { Models } = require("../../infra/database/models");

class FaseRepository {
  getAll(options) {
    return Models.FaseModel.findAll(options);
  }

  findById(id, options) {
    return Models.FaseModel.findByPk(id, options);
  }

  create(data) {
    return Models.FaseModel.create(data);
  }

  update(data, options) {
    return Models.FaseModel.update(data, options);
  }

  findOne(data, options) {
    return Models.FaseModel.findOne(data, options);
  }

  deleteById(id) {
    return Models.FaseModel.destroy({ where: { id } });
  }

  deleteByUserId(id_usuario) {
    return Models.FaseModel.destroy({ where: { id_usuario } });
  }
}

exports.FaseRepository = FaseRepository;
