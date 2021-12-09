const { PostagemEntity } = require("../../../domain/entities/Postagem");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");
class UpdatePostagemUseCase {
  constructor(postagemRepository) {
    this.postagemRepository = postagemRepository;
  }

  async handle(id, data, host) {
    const postagem = await this.postagemRepository.findById(id, { raw: true });

    if (!postagem) {
      throw new NotFoundException("Postagem id not found.");
    }

    let imagePath;
    if (data.imagem && !data.imagem.includes(host)) {
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
      imagePath = `${host}/public/images/postagens/${filename}`;
    }

    const newPostagem = new PostagemEntity({
      ...postagem,
      ...data,
      imagem: data.imagem ? imagePath : postagem.imagem,
    });

    await this.postagemRepository.update(newPostagem, { where: { id } });

    if (postagem.imagem && imagePath) {
      const oldPath = postagem.imagem.replace(`${data.host}`, process.cwd());
      if (fs.existsSync(oldPath)) {
        fs.rmSync(oldPath);
      }
    }
  }
}

exports.UpdatePostagemUseCase = UpdatePostagemUseCase;
