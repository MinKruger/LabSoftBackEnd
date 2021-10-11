const { DataTypes, Model } = require("sequelize");

class AtleticaModel extends Model {
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
        },
        logo: {
          type: DataTypes.TEXT("medium"),
          allowNull: false,
        },
        instagram: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        ativo: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        data_criacao: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        id_usuario: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: {
              tableName: "usuarios",
            },
            key: "id",
          },
        },
      },
      {
        sequelize,
        modelName: "atleticas",
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.cursos, {
      foreignKey: "id_atletica",
      onDelete: "SET NULL",
    });
  }

  static associate(models) {
    this.belongsTo(models.usuarios, {
      foreignKey: "id_usuario",
      onDelete: "SET NULL",
    });
  }
}

exports.AtleticaModel = AtleticaModel;
