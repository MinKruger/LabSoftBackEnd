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

  static associate(models) {
    this.belongsTo(models.atleticas, {
      foreignKey: "id_curso",
      onDelete: "SET NULL",
    });

    this.belongsTo(models.atleticas, {
      foreignKey: "id_curso",
      onDelete: "SET NULL",
    });
  }
}

exports.CursoModel = CursoModel;
