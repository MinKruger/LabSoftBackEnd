const { DataTypes, Model } = require("sequelize");

class DCEModel extends Model {
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
        id_cargo: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "cargo",
            },
            key: "id",
          },
        },
        id_usuario: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: {
              tableName: "usuario",
            },
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "dce",
        modelName: "DCE",
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Cargo, {
      foreignKey: "id_cargo"
    });
  }

  static associate(models) {
    this.hasMany(models.Usuario, {
      foreignKey: "id_usuario",
    });
  }
}

exports.DCEModel = DCEModel;
