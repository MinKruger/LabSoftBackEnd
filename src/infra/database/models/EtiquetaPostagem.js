const { DataTypes, Model } = require("sequelize");

class EtiquetaPostagemModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        id_etiqueta: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: {
              tableName: "etiquetas",
            },
            key: "id",
          },
        },
        id_postagem: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
              model: {
                tableName: "postagens",
              },
              key: "id",
            },
          },
      },
      {
        sequelize,
        modelName: "etiquetas_postagens",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.etiquetas, {
      foreignKey: "id_etiqueta",
    });
    this.belongsTo(models.postagens, {
        foreignKey: "id_postagem",
    });
  }
  
}

exports.EtiquetaPostagemModel = EtiquetaPostagemModel;
