const { DataTypes, Model } = require("sequelize");

class EtiquetaModel extends Model {
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
          type: DataTypes.STRING(250),
          allowNull: false,
          unique: true,
        }
      },
      {
        sequelize,
        modelName: "etiquetas",
      }
    );
    return this;
  }
}

exports.EtiquetaModel = EtiquetaModel;
