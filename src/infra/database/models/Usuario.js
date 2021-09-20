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
        id_tipoUsuario: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "tipo_usuario",
            },
            key: "id",
          },
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
