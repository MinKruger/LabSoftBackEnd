const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");

class DCEEntity {
  nome = null;
  id_cargo = null;
  id_usuario = null;

  constructor(data) {
    Object.assign(this, data);
    Object.freeze(this);
    this.#validate();
  }

  #validate() {
    if (!this.nome) {
      throw new BadRequestException("Property 'nome' is required.");
    }

    if (!this.id_cargo) {
      throw new BadRequestException("Property 'id_cargo' is required.");
    }

    if (!this.id_cargo) {
      throw new BadRequestException("Property 'id_usuario' is required.");
    }
  }
}

exports.DCEEntity = DCEEntity;
