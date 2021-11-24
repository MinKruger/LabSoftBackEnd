const { DataTypes, Model } = require("sequelize");

class CursoModel extends Model {
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
        modelName: "cursos",
        timestamps: true,
        createdAt: "created_at",
      }
    );
    return this;
  }
}

exports.CursoModel = CursoModel;
