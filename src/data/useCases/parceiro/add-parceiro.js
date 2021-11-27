const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const { ParceiroEntity } = require("../../../domain/entities/Parceiro");
const {
  BadRequestException,
} = require("../../../presentation/errors/BadRequestException");

class AddParceiroUseCase {
  constructor(parceiroRepository) {
    this.parceiroRepository = parceiroRepository;
  }

  async handle(data) {
    let parceiro = new ParceiroEntity(data);

    const parceiroExists = await this.parceiroRepository.findOne({
      where: { titulo: parceiro.titulo },
    });

    if (parceiroExists) {
      throw new BadRequestException("Parceiro already exists");
    }

    const filename = `${v4()}.jpg`;

    const filePath = path.resolve(
      process.cwd(),
      "public",
      "images",
      "parceiros"
    );
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }

    fs.writeFileSync(path.resolve(filePath, filename), data.logo, "base64");
    const imagePath = `${data.host}/public/images/parceiros/${filename}`;

    parceiro = await this.parceiroRepository.create({
      ...parceiro,
      logo: imagePath,
    });

    return parceiro;
  }
}

exports.AddParceiroUseCase = AddParceiroUseCase;
