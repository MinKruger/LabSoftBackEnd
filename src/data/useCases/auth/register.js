const bcrypt = require('bcrypt');
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const { UsuarioEntity } = require("../../../domain/entities/Usuario");
const { BadRequestException } = require("../../../presentation/errors/BadRequestException");

class RegisterUseCase {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async handle(data) {
    let newUsuario = new UsuarioEntity(data);

    // Verifica se já existe usuário cadastrado com esse email
    const emailRegistered = await this.usuarioRepository.findOne({ where: { email: newUsuario.email } });
    if (emailRegistered) {
      throw new BadRequestException("Email already registered");
    }

    // Faz o hash da senha
    let hashedPassword = null;
    const saltRounds = process.env.BCRYPT_HASH_ROUNDS ? parseInt(process.env.BCRYPT_HASH_ROUNDS) : 10;
    await bcrypt.hash(newUsuario.senha, saltRounds).then((hash) => {
      hashedPassword = hash;
    });

    // Tratamento de imagem
    let imagePath = null;
    if (newUsuario.foto) {
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

      imagePath = `${data.host}/public/images/usuarios/${filename}`;
    }

    newUsuario = this.usuarioRepository.create({
      ...newUsuario,
      senha: hashedPassword,
      foto: imagePath,
      permissao: 'aluno',
    });

    return newUsuario;
  }
}

exports.RegisterUseCase = RegisterUseCase;
