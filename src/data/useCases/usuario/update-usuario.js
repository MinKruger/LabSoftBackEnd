const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const { UsuarioEntity } = require("../../../domain/entities/Usuario");
const { AlunoEntity } = require("../../../domain/entities/Aluno");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");
const {
  BadRequestException,
} = require("../../../presentation/errors/BadRequestException");

class UpdateUsuarioUseCase {
  constructor(usuarioRepository, atleticaRepository, alunoRepository, cursoRepository) {
    this.usuarioRepository = usuarioRepository;
    this.atleticaRepository = atleticaRepository;
    this.alunoRepository = alunoRepository;
    this.cursoRepository = cursoRepository;
  }

  async handle(id, data) {
    const { email, senha, nome, foto, instagram, id_atletica, matricula, data_nascimento, id_curso } = data;
    const usuarioData = { email, senha, nome, foto, instagram, id_atletica };

    // Verifica se o usuário existe
    const usuarioExists = await this.usuarioRepository.findById(id);
    if (!usuarioExists) {
      throw new NotFoundException("Usuario not found.");
    }

    // Tratamento de erro se não houver nome na request (nome é obrigatório para criar UsuarioEntity)
    if (!nome) {
      usuarioData.nome = usuarioExists.nome;
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
      usuarioData.email = usuarioExists.email;
    }

    // Tratamento para atlética
    if (id_atletica) {
      const atleticaExists = await this.atleticaRepository.findById(id_atletica);
      if (!atleticaExists) {
        throw new BadRequestException("Atletica with id_atletica not found");
      }
    }

    // Faz o hash da senha
    if (senha) {
      await bcrypt
        .hash(senha, process.env.BCRYPT_HASH_ROUNDS || 10)
        .then((hash) => {
          usuarioData.senha = hash;
        });
    }

    // Tratamento de imagem
    let imagePath = usuarioExists.foto;
    if (usuarioData.foto) {
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
      fs.writeFileSync(path.resolve(filePath, filename), usuarioData.foto, "base64");

      imagePath = `${data.host}/public/images/usuarios/${filename}`;
    }

    // Caso seja aluno
    if (usuarioExists.permissao == "aluno") {
      const alunoData = { matricula, data_nascimento, id_curso };
      // Verifica se o aluno existe
      const alunoExists = await this.alunoRepository.findOne({ where: { id_usuario: id } });
      if (!alunoExists) {
        throw new NotFoundException("Aluno not found.");
      }
      // Verifica se já existe aluno cadastrado com essa matrícula
      if (matricula) {
        const matriculaRegistered = await this.alunoRepository.findOne({ where: { matricula } });
        if (matriculaRegistered && matriculaRegistered.id != alunoExists.id) {
          throw new BadRequestException("Matricula already registered");
        }
      }
      // Tratamento de erro se não houver matricula na request (matricula é obrigatória para criar AlunoEntity)
      else {
        alunoData.matricula = alunoExists.matricula;
      }
      // Tratamento para curso
      if (id_curso) {
        const cursoExists = await this.cursoRepository.findById(id_curso);
        if (!cursoExists) {
          throw new BadRequestException("Curso with id_curso not found");
        }
      }
      const updatedAluno = new AlunoEntity({ ...alunoData, id_usuario: id });
      delete updatedAluno.id;
      await this.alunoRepository.update(updatedAluno, { where: { id_usuario: id } });
    }

    const updatedUsuario = new UsuarioEntity({ ...usuarioData, foto: imagePath });
    delete updatedUsuario.id;
    await this.usuarioRepository.update(updatedUsuario, { where: { id } });
  }
}

exports.UpdateUsuarioUseCase = UpdateUsuarioUseCase;
