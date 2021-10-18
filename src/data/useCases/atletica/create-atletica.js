const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const { AtleticaEntity } = require("../../../domain/entities/Atletica");
const {
  BadRequestException,
} = require("../../../presentation/errors/BadRequestException");
class CreateAtleticaUseCase {
  constructor(atleticaRepository, cursoAtleticaRepository, cursoRepository) {
    this.atleticaRepository = atleticaRepository;
    this.cursoAtleticaRepository = cursoAtleticaRepository;
    this.cursoRepository = cursoRepository;
  }

  async handle(data) {
    let newAtletica = new AtleticaEntity(data);

    const atleticaExists = await this.atleticaRepository.findByName(
      newAtletica.nome
    );

    if (atleticaExists) {
      throw new BadRequestException("Atletica already exists");
    }

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

    newAtletica = await this.atleticaRepository.create({
      ...newAtletica,
      logo: imagePath,
    });

    return newAtletica;
  }
}

exports.CreateAtleticaUseCase = CreateAtleticaUseCase;
