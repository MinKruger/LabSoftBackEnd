const {
  ICursoRepository,
} = require("../../domain/interfaces/repositories/ICursoRepository");
const { Models } = require("../../infra/database/models");

class EventoRepository {
  findById(id, options) {
    return Models.EventoModel.findByPk(id, options);
  }

  getAll(options) {
    return Models.EventoModel.findAll(options);
  }

  create(data) {
    return Models.EventoModel.create(data);
  }
}

exports.EventoRepository = EventoRepository;
