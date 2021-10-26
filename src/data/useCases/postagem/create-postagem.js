const { PostagemEntity } = require("../../../domain/entities/Postagem");
const createDOMPurify = require("dompurify");
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");
const { JSDOM } = require("jsdom");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");
const {
  ForbiddenException,
} = require("../../../presentation/errors/ForbiddenException");

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);
class CreatePostagemUseCase {
  constructor(postagemRepository, usuarioRepository) {
    this.postagemRepository = postagemRepository;
    this.usuarioRepository = usuarioRepository;
  }

  async handle(data) {
    if (data.descricao) {
      data.descricao = DOMPurify.sanitize(data.descricao, {
        USE_PROFILES: { html: true },
      });
    }

    const usuario = await this.usuarioRepository.findById(data.id_usuario);
    if (!usuario) {
      throw new NotFoundException("id_usuario not found");
    }

    if (!["dce1", "dce2", "dce3", "atletica"].includes(usuario.permissao)) {
      throw new ForbiddenException("User not authorized");
    }

    let newPostagem = new PostagemEntity(data);
    let imagePath;
    if (data.imagem) {
      const filename = `${v4()}.jpg`;

      const filePath = path.resolve(
        process.cwd(),
        "public",
        "images",
        "postagens"
      );
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.resolve(filePath, filename), data.imagem, "base64");
      imagePath = `${data.host}/public/images/postagens/${filename}`;
    }

    newPostagem = await this.postagemRepository.create({
      ...newPostagem,
      imagem: data.imagem ? imagePath : null,
    });

    return newPostagem;
  }
}

exports.CreatePostagemUseCase = CreatePostagemUseCase;
