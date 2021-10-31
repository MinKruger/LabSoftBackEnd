const {
    IEtiquetaPostagemRepository,
  } = require("../../domain/interfaces/repositories/IEtiquetaPostagemRepository");
  const { Models } = require("../../infra/database/models");
  
  class EtiquetaPostagemRepository extends IEtiquetaPostagemRepository {
    getAll(options) {
      return Models.EtiquetaPostagemModel.findAll(options);
    }
  
    count(options) {
      return Models.EtiquetaPostagemModel.count(options);
    }
  
    findById(id, options) {
      return Models.EtiquetaPostagemModel.findByPk(id, options);
    }
  
    create(data) {
      return Models.EtiquetaPostagemModel.create(data);
    }
  
    update(data, options) {
      return Models.EtiquetaPostagemModel.update(data, options);
    }
  
    deleteById(id) {
      return Models.EtiquetaPostagemModel.destroy({ where: { id } });
    }
  }
  
  exports.EtiquetaPostagemRepository = EtiquetaPostagemRepository;
  