const { DataTypes, Model } = require("sequelize");

class AtleticaModel extends Model {
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
        logo: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        ativo: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        data_criacao: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "atleticas",
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

exports.AtleticaModel = AtleticaModel;
