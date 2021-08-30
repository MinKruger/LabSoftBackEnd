const Sequelize = require("sequelize");
const databaseConfig = require("../config/database.js");
const { Models } = require("./models/index.js");

const NODE_ENV = process.env.NODE_ENV || "development";

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig[NODE_ENV]);
    this.connection
      .authenticate()
      .then(() => console.log("Database connected"))
      .catch((err) => console.log("Unable to connect to the database:", err));

    Object.values(Models)
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

module.exports = new Database();
