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
        tipo_usuario: {
          type: DataTypes.ENUM('atletica', 'dce'),
          allowNull: false,
        },
        id_atletica: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: {
              tableName: "atleticas",
            },
            key: "id",
          },
        },
      },
      {
        sequelize,
        modelName: "usuarios",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.atleticas, {
      foreignKey: "id_atletica",
    });
  }
}

exports.UsuarioModel = UsuarioModel;
