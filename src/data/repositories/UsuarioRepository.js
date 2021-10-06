const {
  IUsuarioRepository,
} = require("../../domain/interfaces/repositories/IUsuarioRepository");
const { Models } = require("../../infra/database/models");

class UsuarioRepository extends IUsuarioRepository {
  getAll(options) {
    return Models.UsuarioModel.findAll(options);
  }

  findById(id, options) {
    return Models.UsuarioModel.findByPk(id, options);
  }

  create(data) {
    return Models.UsuarioModel.create(data);
  }

  update(data, options) {
    return Models.UsuarioModel.update(data, options);
  }

  deleteById(id) {
    return Models.UsuarioModel.destroy({ where: { id } });
  }
}

exports.UsuarioRepository = UsuarioRepository;
