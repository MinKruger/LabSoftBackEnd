const dotenv = require("dotenv");

dotenv.config({
  path: {
    production: ".env.production",
    staging: ".env.staging",
    development: ".env.development",
  }[process.env.NODE_ENV || "development"],
});

const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  [NODE_ENV]: {
    dialect: "mysql",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    define: {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
};
