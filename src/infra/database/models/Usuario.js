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
        email: {
          type: DataTypes.STRING(200),
          allowNull: false,
          unique: true,
        },
        senha: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        nome: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        instagram: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
        foto: {
          type: DataTypes.TEXT("medium"),
          allowNull: true,
        },
        permissao: {
          type: DataTypes.ENUM("aluno", "atletica", "dce1", "dce2", "dce3"),
          allowNull: false,
          defaultValue: "aluno",
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
      onDelete: "SET NULL",
    });

    this.hasMany(models.postagens, {
      foreignKey: "id_usuario",
    });
  }
}

exports.UsuarioModel = UsuarioModel;
