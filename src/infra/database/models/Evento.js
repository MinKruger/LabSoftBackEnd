const { DataTypes, Model } = require("sequelize");

class EventoModel extends Model {
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
          unique: true,
        },
        descricao: {
          type: DataTypes.STRING(500),
          allowNull: true,
        },
        imagem: {
          type: DataTypes.STRING(200),
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "eventos",
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.campeonatos, {
      foreignKey: "id_evento",
    });
  }
}

exports.EventoModel = EventoModel;
