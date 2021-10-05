const { PostagemEntity } = require("../../../domain/entities/Postagem");
const createDOMPurify = require("dompurify");
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
      throw new NotFoundException("Usuario not found");
    }

    let newPostagem = new PostagemEntity(data);

    newPostagem = await this.postagemRepository.create(newPostagem);

    return newPostagem;
  }
}

exports.CreatePostagemUseCase = CreatePostagemUseCase;
