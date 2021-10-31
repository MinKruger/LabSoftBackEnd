const {
    IEtiquetaRepository,
  } = require("../../domain/interfaces/repositories/IEtiquetaRepository");
  const { Models } = require("../../infra/database/models");
  
  class EtiquetaRepository extends IEtiquetaRepository {
    getAll(options) {
      return Models.EtiquetaModel.findAll(options);
    }
  
    count(options) {
      return Models.EtiquetaModel.count(options);
    }
  
    findById(id, options) {
      return Models.EtiquetaModel.findByPk(id, options);
    }
  
    create(data) {
      return Models.EtiquetaModel.create(data);
    }
  
    update(data, options) {
      return Models.EtiquetaModel.update(data, options);
    }
  
    deleteById(id) {
      return Models.EtiquetaModel.destroy({ where: { id } });
    }
  }
  
  exports.EtiquetaRepository = EtiquetaRepository;
  