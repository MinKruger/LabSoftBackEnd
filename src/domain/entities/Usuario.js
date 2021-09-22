const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");

class UsuarioEntity {
  nome = null;

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

    if (!this.tipo_usuario) {
      throw new BadRequestException("Property 'tipo_usuario' is required.");
    }
  }
}

exports.UsuarioEntity = UsuarioEntity;
