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
        },
        senha: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        tipoUsuario: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Usuario",
      }
    );
    return this;
  }
}

exports.UsuarioModel = UsuarioModel;
