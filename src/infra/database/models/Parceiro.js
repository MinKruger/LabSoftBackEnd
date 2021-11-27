const { DataTypes, Model } = require("sequelize");

class ParceiroModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        logo: {
          type: DataTypes.STRING(200),
          allowNull: false,
          unique: true,
        },
        titulo: {
          type: DataTypes.STRING(500),
          allowNull: false,
        },
        descricao: {
          type: DataTypes.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "parceiros",
      }
    );
    return this;
  }
}

exports.ParceiroModel = ParceiroModel;
