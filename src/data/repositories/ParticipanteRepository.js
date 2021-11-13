const {
  IParticipanteRepository,
} = require("../../domain/interfaces/repositories/IParticipanteRepository");
const { Models } = require("../../infra/database/models");

class ParticipanteRepository extends IParticipanteRepository {
  findById(id, options) {
    return Models.ParticipanteModel.findByPk(id, options);
  }

  getAll(options) {
    return Models.ParticipanteModel.findAll(options);
  }

  create(data) {
    return Models.ParticipanteModel.create(data);
  }

  update(data, options) {
    return Models.ParticipanteModel.update(data, options);
  }

  deleteById(id) {
    return Models.ParticipanteModel.destroy({ where: { id } });
  }
}

exports.ParticipanteRepository = ParticipanteRepository;
