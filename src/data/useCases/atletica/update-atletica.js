const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");
const { AtleticaEntity } = require("../../../domain/entities/Atletica");
const {
  NotFoundException,
} = require("../../../presentation/errors/NotFoundException");

class UpdateAtleticaUseCase {
  constructor(atleticaRepository) {
    this.atleticaRepository = atleticaRepository;
  }

  async handle(id, data) {
    const atletica = await this.atleticaRepository.findById(id, { raw: true });

    if (!atletica) {
      throw new NotFoundException("Atletica id not found.");
    }

    delete data.ativo;
    delete data.id;

    const filename = `${v4()}.jpg`;

    const filePath = path.resolve(
      process.cwd(),
      "public",
      "images",
      "atleticas"
    );
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true });
    }

    fs.writeFileSync(path.resolve(filePath, filename), data.logo, "base64");
    const imagePath = `${data.host}/public/images/atleticas/${filename}`;

    const newAtletica = new AtleticaEntity({
      ...atletica,
      ...data,
      logo: imagePath,
    });

    await this.atleticaRepository.update(newAtletica, { where: { id } });

    if (atletica.logo) {
      const oldPath = atletica.logo.replace(`${data.host}`, process.cwd());
      if (fs.existsSync(oldPath)) {
        fs.rmSync(oldPath);
      }
    }
  }
}

exports.UpdateAtleticaUseCase = UpdateAtleticaUseCase;
