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
    if (!this.login) {
      throw new BadRequestException("Property 'login' is required.");
    }

    if (!this.senha) {
      throw new BadRequestException("Property 'senha' is required.");
    }
  }
}

exports.UsuarioEntity = UsuarioEntity;
