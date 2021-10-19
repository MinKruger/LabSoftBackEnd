const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");

class UsuarioEntity {
  constructor(data) {
    Object.assign(this, data);
    Object.freeze(this);
    this.#validate();
  }

  #validate() {
    if (!this.email) {
      throw new BadRequestException("Property 'email' is required.");
    }

    if (!this.nome) {
      throw new BadRequestException("Property 'nome' is required.");
    }
  }
}

exports.UsuarioEntity = UsuarioEntity;
