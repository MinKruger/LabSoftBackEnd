const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");

class DCEEntity {
  nome = null;

  constructor(data) {
    Object.assign(this, data);
    Object.freeze(this);
    this.#validate();
  }

  #validate() {
    if (!this.nome) {
      throw new BadRequestException("Property 'nome' is required.");
    }
  }
}

exports.DCEEntity = DCEEntity;
