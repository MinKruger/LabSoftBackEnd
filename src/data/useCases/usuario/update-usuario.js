const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const { UsuarioEntity } = require("../../../domain/entities/Usuario");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");
const {
  BadRequestException,
} = require("../../../presentation/errors/BadRequestException");

class UpdateUsuarioUseCase {
  constructor(usuarioRepository, atleticaRepository) {
    this.usuarioRepository = usuarioRepository;
    this.atleticaRepository = atleticaRepository;
  }

  async handle(id, data) {
    const { nome, email, senha, permissao, id_atletica, host } = data;

    // Verifica se o usuário existe
    const usuarioExists = await this.usuarioRepository.findById(id);
    if (!usuarioExists) {
      throw new NotFoundException("Usuario not found.");
    }

    // Se a permissão for atlética, verifica se ela existe
    if (permissao == "atletica") {
      if (!id_atletica) {
        throw new BadRequestException("id_atletica param required");
      } else {
        const atleticaExists = await this.atleticaRepository.findById(
          newUsuario.id_atletica
        );
        if (!atleticaExists) {
          throw new BadRequestException("Atletica with id_atletica not found");
        }
      }
    }

    // Tratamento de erro se não houver nome na request (nome é obrigatório para criar UsuarioEntity)
    if (!nome) {
      data.nome = usuarioExists.nome;
    }

    // Verifica se já existe usuário cadastrado com esse email
    if (email) {
      const emailRegistered = await this.usuarioRepository.findOne({
        where: { email },
      });
      if (emailRegistered && emailRegistered.id != id) {
        throw new BadRequestException("Email already registered");
      }
    }
    // Tratamento de erro se não houver email na request (email é obrigatório para criar UsuarioEntity)
    else {
      data.email = usuarioExists.email;
    }

    // Faz o hash da senha
    if (senha) {
      await bcrypt
        .hash(senha, process.env.BCRYPT_HASH_ROUNDS || 10)
        .then((hash) => {
          data.senha = hash;
        });
    }

    // Tratamento de imagem
    let imagePath = usuarioExists.foto;
    if (data.foto) {
      const filename = `${v4()}.jpg`;
      const filePath = path.resolve(
        process.cwd(),
        "public",
        "images",
        "usuarios"
      );

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.resolve(filePath, filename), data.foto, "base64");

      imagePath = `${host}/public/images/usuarios/${filename}`;
    }

    const updatedUsuario = new UsuarioEntity({ ...data, foto: imagePath });
    delete updatedUsuario.id;
    await this.usuarioRepository.update(updatedUsuario, { where: { id } });
  }
}

exports.UpdateUsuarioUseCase = UpdateUsuarioUseCase;
