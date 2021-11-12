const { DataTypes, Model } = require("sequelize");

class ParticipanteModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        pontuacao: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 0,
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
        id_atletica: {
          type: DataTypes.UUID,
          allowNull: false,
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
        modelName: "participantes",
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
}

exports.ParticipanteModel = ParticipanteModel;
