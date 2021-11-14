const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");

class ParticipanteEntity {
  id_atletica = null;
  id_campeonato = null;

  constructor(data) {
    Object.assign(this, data);
    Object.freeze(this);
    this.#validate();
  }

  #validate() {
    if (!this.id_atletica) {
      throw new BadRequestException("Property 'id_atletica' is required.");
    }
    if (!this.id_campeonato) {
      throw new BadRequestException("Property 'id_campeonato' is required.");
    }
  }
}

exports.ParticipanteEntity = ParticipanteEntity;
