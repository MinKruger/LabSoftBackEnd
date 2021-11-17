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
        descricao: {
          type: DataTypes.STRING(200),
          allowNull: false,
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
    this.hasMany(models.jogos, {
      foreignKey: "id_fase",
    });
  }
}

exports.FaseModel = FaseModel;
