const {
  IPostagemRepository,
} = require("../../domain/interfaces/repositories/IPostagemRepository");
const { Models } = require("../../infra/database/models");

class PostagemRepository extends IPostagemRepository {
  getAll(options) {
    return Models.PostagemModel.findAll({
      ...options,
      include: [
        {
          model: Models.UsuarioModel,
          attributes: ["nome", "foto"],
        },
      ],
    });
  }

  count(options) {
    return Models.PostagemModel.count(options);
  }

  findById(id, options) {
    return Models.PostagemModel.findByPk(id, options);
  }

  create(data) {
    return Models.PostagemModel.create(data);
  }

  update(data, options) {
    return Models.PostagemModel.update(data, options);
  }

  deleteById(id) {
    return Models.PostagemModel.destroy({ where: { id } });
  }
}

exports.PostagemRepository = PostagemRepository;
