const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");

class CampeonatoEntity {
  nome = null;
  ano = null;
  modalidade = null;
  evento = null;

  constructor(data) {
    Object.assign(this, data);
    Object.freeze(this);
    this.#validate();
  }

  #validate() {
    if (!this.nome) {
      throw new BadRequestException("Property 'nome' is required.");
    }
    if (!this.ano) {
      throw new BadRequestException("Property 'ano' is required.");
    }
    if (!this.modalidade) {
      throw new BadRequestException("Property 'modalidade' is required.");
    }
    if (!this.evento) {
      throw new BadRequestException("Property 'evento' is required.");
    }
  }
}

exports.CampeonatoEntity = CampeonatoEntity;
