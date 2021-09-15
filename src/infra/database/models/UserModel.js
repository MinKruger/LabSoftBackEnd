const { DataTypes, Model } = require("sequelize");

class UserModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: true,
        },
        cpf: {
          type: DataTypes.STRING(11),
          allowNull: false,
          unique: true,
        },
      },
      {
        timestamps: false,
        sequelize,
        modelName: "users",
      }
    );
    return this;
  }
}

exports.UserModel = UserModel;
