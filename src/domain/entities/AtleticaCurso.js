const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");

class AtleticaCursoEntity {
  id_curso = null;
  id_atletica = null;

  constructor(data) {
    Object.assign(this, data);
    Object.freeze(this);
    this.#validate();
  }

  #validate() {
    if (!this.id_curso) {
      throw new BadRequestException("Property 'id_curso' is required.");
    }

    if (!this.id_atletica) {
      throw new BadRequestException("Property 'id_atletica' is required.");
    }
  }
}

exports.AtleticaCursoEntity = AtleticaCursoEntity;
