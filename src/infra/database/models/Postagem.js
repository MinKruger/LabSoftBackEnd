const { DataTypes, Model } = require("sequelize");

class PostagemModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        titulo: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        tipo: {
          type: DataTypes.ENUM("EVENTOS", "NOTICIAS", "JOGOS"),
          allowNull: false,
        },
        imagem: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        descricao: {
          type: DataTypes.STRING(300),
          allowNull: false,
        },
        data_evento: {
          type: DataTypes.STRING(30),
          allowNull: true,
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
        modelName: "postagens",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.usuarios, {
      foreignKey: "id_usuario",
    });
  }
}

exports.PostagemModel = PostagemModel;