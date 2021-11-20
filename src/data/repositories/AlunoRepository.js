const {
  IAlunoRepository,
} = require("../../domain/interfaces/repositories/IAlunoRepository");
const { Models } = require("../../infra/database/models");

class AlunoRepository extends IAlunoRepository {
  getAll(options) {
    return Models.AlunoModel.findAll(options);
  }

  findById(id, options) {
    return Models.AlunoModel.findByPk(id, options);
  }

  create(data) {
    return Models.AlunoModel.create(data);
  }

  update(data, options) {
    return Models.AlunoModel.update(data, options);
  }

  findOne(data, options) {
    return Models.AlunoModel.findOne(data, options);
  }

  deleteById(id) {
    return Models.AlunoModel.destroy({ where: { id } });
  }

  deleteByUserId(id_usuario) {
    return Models.AlunoModel.destroy({ where: { id_usuario } });
  }
}

exports.AlunoRepository = AlunoRepository;
