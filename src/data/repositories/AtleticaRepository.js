const {
  IAtleticaRepository,
} = require("../../domain/interfaces/repositories/IAtleticaRepository");
const { Models } = require("../../infra/database/models");

class AtleticaRepository extends IAtleticaRepository {
  getAll(options) {
    return Models.AtleticaModel.findAll(options);
  }

  findById(id, options) {
    return Models.AtleticaModel.findOne({
      where: { id: id, ativo: true },
      ...options,
    });
  }

  findByName(name, options) {
    return Models.AtleticaModel.findOne({
      where: { nome: name },
      ...options,
    });
  }

  create(data) {
    return Models.AtleticaModel.create(data);
  }

  update(data, options) {
    return Models.AtleticaModel.update(data, options);
  }

  deleteById(id) {
    return Models.AtleticaModel.destroy({ where: { id } });
  }
}

exports.AtleticaRepository = AtleticaRepository;
