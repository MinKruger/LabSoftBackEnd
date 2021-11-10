const { DataTypes, Model } = require("sequelize");

class CampeonatoModel extends Model {
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
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        ano: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        modalidade: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        evento: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM(
            "ANDAMENTO",
            "ENCERRADO",
            "CANCELADO",
            "AGUARDANDO"
          ),
          defaultValue: "AGUARDANDO",
          allowNull: false,
        },
        id_vencedor: {
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
        modelName: "campeonatos",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.etiquetas, {
      foreignKey: "id_vencedor",
    });
  }
}

exports.CampeonatoModel = CampeonatoModel;
