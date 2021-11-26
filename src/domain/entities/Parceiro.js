const {
    BadRequestException,
  } = require("../../presentation/errors/BadRequestException");
  
  class ParceiroEntity {
    constructor(data) {
      Object.assign(this, data);
      Object.freeze(this);
      this.#validate();
    }
  
    #validate() {
      if (!this.logo) {
        throw new BadRequestException("Property 'logo' is required.");
      }
  
      if (!this.titulo) {
        throw new BadRequestException("Property 'titulo' is required.");
      }
    }
  }
  
  exports.ParceiroEntity = ParceiroEntity;
  