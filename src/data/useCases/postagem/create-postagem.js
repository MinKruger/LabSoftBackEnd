const { PostagemEntity } = require("../../../domain/entities/Postagem");
const {
  EtiquetaPostagemEntity,
} = require("../../../domain/entities/EtiquetaPostagem");
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
const { EtiquetaEntity } = require("../../../domain/entities/Etiqueta");

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);
class CreatePostagemUseCase {
  constructor(
    postagemRepository,
    usuarioRepository,
    etiquetaRepository,
    etiquetaPostagemRepository
  ) {
    this.postagemRepository = postagemRepository;
    this.usuarioRepository = usuarioRepository;
    this.etiquetaRepository = etiquetaRepository;
    this.etiquetaPostagemRepository = etiquetaPostagemRepository;
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

    data.ids_etiqueta?.forEach(async (id) => {
      const etiqueta = await this.etiquetaRepository.findById(id);

      if (etiqueta) {
        const etiquetaPostagem = new EtiquetaPostagemEntity({
          id_postagem: newPostagem.id,
          id_etiqueta: id,
        });

        await this.etiquetaPostagemRepository.create(etiquetaPostagem);
      }
    });

    data.novas_etiquetas?.forEach(async (descricao) => {
      if (descricao) {
        let etiqueta = await this.etiquetaRepository.findOne({
          where: {
            descricao,
          },
        });

        if (!etiqueta) {
          let newEtiqueta = new EtiquetaEntity({ descricao });
          etiqueta = await this.etiquetaRepository.create(newEtiqueta);
        }

        const etiquetaPostagem = new EtiquetaPostagemEntity({
          id_postagem: newPostagem.id,
          id_etiqueta: etiqueta.id,
        });
        await this.etiquetaPostagemRepository.create(etiquetaPostagem);
      }
    });

    return newPostagem;
  }
}

exports.CreatePostagemUseCase = CreatePostagemUseCase;
