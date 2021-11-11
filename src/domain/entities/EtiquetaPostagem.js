const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");

class EtiquetaPostagemEntity {
  id_etiqueta = null;
  id_postagem = null;

  constructor(data) {
    Object.assign(this, data);
    Object.freeze(this);
    this.#validate();
  }

  #validate() {
    if (!this.id_etiqueta) {
      throw new BadRequestException("Property 'id_etiqueta' is required.");
    }
    if (!this.id_postagem) {
      throw new BadRequestException("Property 'id_postagem' is required.");
    }
  }
}

exports.EtiquetaPostagemEntity = EtiquetaPostagemEntity;
