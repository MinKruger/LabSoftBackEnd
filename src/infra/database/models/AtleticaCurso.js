const { DataTypes, Model } = require("sequelize");

class AtleticaCursoModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        id_curso: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "cursos",
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
        modelName: "atleticas_cursos",
      }
    );
    return this;
  }
}

exports.AtleticaCursoModel = AtleticaCursoModel;
