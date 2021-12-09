const { DataTypes, Model } = require("sequelize");

class FaseModel extends Model {
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
        id_campeonato: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "campeonatos",
            },
            key: "id",
          },
        },
      },
      {
        sequelize,
        modelName: "fases",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.campeonatos, {
      foreignKey: "id_campeonato",
    });
  }
}

exports.FaseModel = FaseModel;
