const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");

class AtleticaEntity {
  nome = null;
  logo = null;

  constructor(data) {
    Object.assign(this, data);
    Object.freeze(this);
    this.#validate();
  }

  #validate() {
    if (!this.nome) {
      throw new BadRequestException("Property 'nome' is required.");
    }

    if (!this.logo) {
      throw new BadRequestException("Property 'logo' is required.");
    }
  }
}

exports.AtleticaEntity = AtleticaEntity;
