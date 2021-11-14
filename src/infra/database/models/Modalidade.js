const { DataTypes, Model } = require("sequelize");

class ModalidadeModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING(200),
          allowNull: false,
          unique: true,
        },
        descricao: {
          type: DataTypes.STRING(500),
          allowNull: true,
        },
        imagem: {
          type: DataTypes.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "modalidades",
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.campeonatos, {
      foreignKey: "id_modalidade",
    });
  }
}

exports.ModalidadeModel = ModalidadeModel;
