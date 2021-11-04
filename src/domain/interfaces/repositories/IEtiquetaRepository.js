const {
    NotImplementedException,
  } = require("../../../presentation/errors/NotImplementedException");
  
  class IEtiquetaRepository {
    getAll() {
      throw new NotImplementedException();
    }
  
    findById() {
      throw new NotImplementedException();
    }
  
    create() {
      throw new NotImplementedException();
    }
  
    update() {
      throw new NotImplementedException();
    }
  }
  
  exports.IEtiquetaRepository = IEtiquetaRepository;
  