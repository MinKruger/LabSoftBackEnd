const bcrypt = require('bcrypt');
const { AuthToken } = require('../../../app/providers/AuthToken');
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const { UsuarioEntity } = require("../../../domain/entities/Usuario");
const { AlunoEntity } = require("../../../domain/entities/Aluno");
const { BadRequestException } = require("../../../presentation/errors/BadRequestException");

class RegisterUseCase {
  constructor(usuarioRepository, atleticaRepository, alunoRepository, cursoRepository) {
    this.usuarioRepository = usuarioRepository;
    this.atleticaRepository = atleticaRepository;
    this.alunoRepository = alunoRepository;
    this.cursoRepository = cursoRepository;
  }

  async handle(data) {
    const { email, senha, nome, foto, instagram, id_atletica, matricula, data_nascimento, id_curso} = data;
    const usuarioData = { email, senha, nome, foto, instagram, id_atletica };
    const alunoData = { matricula, data_nascimento, id_curso };

    // Verifica se já existe usuário cadastrado com esse email
    const emailRegistered = await this.usuarioRepository.findOne({ where: { email } });
    if (emailRegistered) {
      throw new BadRequestException("Email already registered");
    }

    // Verifica se já existe aluno cadastrado com essa matrícula
    const matriculaRegistered = await this.alunoRepository.findOne({ where: { matricula } });
    if (matriculaRegistered) {
      throw new BadRequestException("Matricula already registered");
    }

    // Tratamento para atlética
    if (id_atletica) {
      const atleticaExists = await this.atleticaRepository.findById(id_atletica);
      if (!atleticaExists) {
        throw new BadRequestException("Atletica with id_atletica not found");
      }
    }

    // Tratamento para curso
    if (id_curso) {
      const cursoExists = await this.cursoRepository.findById(id_curso);
      if (!cursoExists) {
        throw new BadRequestException("Curso with id_curso not found");
      }
    }

    // Faz o hash da senha
    let hashedPassword = null;
    const saltRounds = process.env.BCRYPT_HASH_ROUNDS ? parseInt(process.env.BCRYPT_HASH_ROUNDS) : 10;
    await bcrypt.hash(senha, saltRounds).then((hash) => {
      hashedPassword = hash;
    });

    // Tratamento de imagem
    let imagePath = null;
    if (foto) {
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
      fs.writeFileSync(path.resolve(filePath, filename), foto, "base64");

      imagePath = `${data.host}/public/images/usuarios/${filename}`;
    }

    let newUsuario = new UsuarioEntity(usuarioData);

    newUsuario = await this.usuarioRepository.create({
      ...newUsuario,
      senha: hashedPassword,
      foto: imagePath,
      permissao: 'aluno',
    });

    let newAluno = new AlunoEntity({...alunoData, id_usuario: newUsuario.id});

    newAluno = await this.alunoRepository.create(newAluno);

    return AuthToken.generate({ id: newUsuario.id });
  }
}

exports.RegisterUseCase = RegisterUseCase;
