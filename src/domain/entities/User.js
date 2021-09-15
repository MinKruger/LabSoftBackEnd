const {
  BadRequestException,
} = require("../../presentation/errors/BadRequestException");

class UserEntity {
  name = null;
  email = null;
  cpf = null;

  constructor(data) {
    Object.assign(this, data);
    Object.freeze(this);
    this.#validate();
  }

  #validate() {
    if (!this.name) {
      throw new BadRequestException("Property 'name' is required.");
    }

    if (!this.cpf) {
      throw new BadRequestException("Property 'cpf' is required.");
    }

    if (!this.email) {
      throw new BadRequestException("Property 'email' is required.");
    }

    if (this.cpf.length !== 11) {
      throw new BadRequestException("Cpf invalid.");
    }

    if (!this.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      throw new BadRequestException("Property 'email' is malformatted.");
    }
  }
}

exports.UserEntity = UserEntity;
