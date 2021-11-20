const { DataTypes, Model } = require("sequelize");

class AlunoModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        matricula: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        data_nascimento: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        id_curso: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: {
              tableName: "cursos",
            },
            key: "id",
          },
        },
        id_usuario: {
          type: DataTypes.UUID,
          allowNull: false,
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
        modelName: "alunos",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.cursos, {
      foreignKey: "id_curso",
      onDelete: "SET NULL",
    });

    this.belongsTo(models.usuarios, {
      foreignKey: "id_usuario",
    });
  }
}

exports.AlunoModel = AlunoModel;
