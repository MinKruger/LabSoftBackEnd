const { PostagemEntity } = require("../../../domain/entities/Postagem");
const createDOMPurify = require("dompurify");
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");
const { JSDOM } = require("jsdom");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

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

    let newPostagem = new PostagemEntity(data);

    const filename = `${v4()}.jpg`;

    const filePath = path.resolve(
      process.cwd(),
      "public",
      "images",
      "postagens"
    );
    if (!fs.existsSync(filePath)) {
      console.log("entrou");
      fs.mkdirSync(filePath, { recursive: true });
    }

    fs.writeFileSync(path.resolve(filePath, filename), data.imagem, "base64");

    const imagePath = `${data.host}/public/images/postagens/${filename}`;
    newPostagem = await this.postagemRepository.create({
      ...newPostagem,
      imagem: imagePath,
    });

    return newPostagem;
  }
}

exports.CreatePostagemUseCase = CreatePostagemUseCase;
