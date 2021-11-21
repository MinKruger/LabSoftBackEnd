const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");

class AlunoEntity {
  constructor(data) {
    Object.assign(this, data);
    Object.freeze(this);
    this.#validate();
  }

  #validate() {
    if (!this.matricula) {
      throw new BadRequestException("Property 'matricula' is required.");
    }

    if (!this.id_usuario) {
      throw new BadRequestException("Property 'id_usuario' is required.");
    }
  }
}

exports.AlunoEntity = AlunoEntity;
