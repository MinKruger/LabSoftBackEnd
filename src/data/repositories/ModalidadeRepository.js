const {
  ICursoRepository,
} = require("../../domain/interfaces/repositories/ICursoRepository");
const { Models } = require("../../infra/database/models");

class ModalidadeRepository {
  findById(id, options) {
    return Models.ModalidadeModel.findByPk(id, options);
  }

  getAll(options) {
    return Models.ModalidadeModel.findAll(options);
  }

  create(data) {
    return Models.ModalidadeModel.create(data);
  }
}

exports.ModalidadeRepository = ModalidadeRepository;
