const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");
const moment = require("moment");
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

    if (!this.data_criacao) {
      throw new BadRequestException("Property 'data_criacao' is required.");
    }

    if (!moment(this.data_criacao, "DD/MM/YYYY", true).isValid()) {
      throw new BadRequestException("Property 'data_criacao' is not a date.");
    }
  }
}

exports.AtleticaEntity = AtleticaEntity;
