const { DataTypes, Model } = require("sequelize");

class UsuarioModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        login: {
          type: DataTypes.STRING(200),
          allowNull: false,
          unique: true,
        },
        senha: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        foto: {
          type: DataTypes.TEXT,
          allowNull: true,
        }
      },
      {
        sequelize,
        modelName: "usuarios",
        defaultScope: {
          attributes: { exclude: ['senha'] },
        },
      }
    );
    return this;
  }
}

exports.UsuarioModel = UsuarioModel;
