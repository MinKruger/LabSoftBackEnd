const { DataTypes, Model } = require("sequelize");

class CargoModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        descricao: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Cargo",
      }
    );
    return this;
  }
}

exports.CargoModel = CargoModel;
