const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");
const moment = require("moment");

class JogoEntity {
  id_time1 = null;
  id_time2 = null;
  data_jogo = null;

  constructor(data) {
    Object.assign(this, data);
    Object.freeze(this);
    this.#validate();
  }

  #validate() {
    if (!this.id_time1) {
      throw new BadRequestException("Property 'id_time1' is required.");
    }

    if (!this.id_time2) {
      throw new BadRequestException("Property 'id_time2' is required.");
    }

    if (!this.data_jogo) {
      throw new BadRequestException("Property 'data_jogo' is required.");
    }

    if (!moment(this.data_jogo, "DD/MM/YYYY", true).isValid()) {
      throw new BadRequestException("Property 'data_jogo' is not a date.");
    }
  }
}

exports.JogoEntity = JogoEntity;
