const {
    BadRequestException,
  } = require("../../presentation/errors/BadRequestException");
  const moment = require("moment");
  
  class EtiquetaEntity {
    descricao = null;
  
    constructor(data) {
      Object.assign(this, data);
      Object.freeze(this);
      this.#validate();
    }
  
    #validate() {
      if (!this.descricao) {
        throw new BadRequestException("Property 'descricao' is required.");
      }
    }
  }
  
  exports.EtiquetaEntity = EtiquetaEntity;
  