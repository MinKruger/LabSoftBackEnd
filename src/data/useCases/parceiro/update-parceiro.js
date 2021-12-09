const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");
const { AtleticaEntity } = require("../../../domain/entities/Atletica");
const { ParceiroEntity } = require("../../../domain/entities/Parceiro");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class UpdateParceiroUseCase {
  constructor(parceiroRepository) {
    this.parceiroRepository = parceiroRepository;
  }

  async handle(id, data) {
    const parceiro = await this.parceiroRepository.findById(id, { raw: true });

    if (!parceiro) {
      throw new NotFoundException("Parceiro id not found.");
    }

    delete data.ativo;
    delete data.id;
    let imagePath;

    if (data.logo && !data.logo.includes(data.host)) {
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
      imagePath = `${data.host}/public/images/parceiros/${filename}`;
    }

    const newParceiro = new ParceiroEntity({
      ...parceiro,
      ...data,
      logo: data.logo ? imagePath : parceiro.logo,
    });

    await this.parceiroRepository.update(newParceiro, { where: { id } });

    if (parceiro.logo && data.logo) {
      const oldPath = parceiro.logo.replace(`${data.host}`, process.cwd());
      if (fs.existsSync(oldPath)) {
        fs.rmSync(oldPath);
      }
    }
  }
}

exports.UpdateParceiroUseCase = UpdateParceiroUseCase;
