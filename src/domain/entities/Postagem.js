const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");
const moment = require("moment");

class PostagemEntity {
  titulo = null;
  tipo = null;
  id_usuario = null;
  imagem = null;
  descricao = null;
  data_evento = null;

  constructor(data) {
    Object.assign(this, data);
    Object.freeze(this);
    this.#validate();
  }

  #validate() {
    if (!this.titulo) {
      throw new BadRequestException("Property 'titulo' is required.");
    }

    if (!this.tipo) {
      throw new BadRequestException("Property 'tipo' is required.");
    }

    if (
      this.tipo !== "NOTICIAS" &&
      this.tipo !== "EVENTOS" &&
      this.tipo !== "JOGOS"
    ) {
      throw new BadRequestException("Property 'tipo' is not allowed type.");
    }

    if (!this.descricao) {
      throw new BadRequestException("Property 'descricao' is required.");
    }

    if (!moment(this.data_evento, "DD/MM/YYYY", true).isValid()) {
      throw new BadRequestException("Property 'data_evento' is not a date.");
    }
  }
}

exports.PostagemEntity = PostagemEntity;
