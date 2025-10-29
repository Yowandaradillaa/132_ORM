require('dotenv').config();

const development = {
    username: Process.env.DB_USERNAME,
    password: Process.env.DB_PASSWORD,
    database: Process.env.DB_NAME,
    host: Process.env.DB_HOST,
    port: Process.env.DB_PORT,
    dialect: Process.env.DB_DIALECT
  };

 const test = {
    username: Process.env.DB_USERNAME,
    password: Process.env.DB_PASSWORD,
    database: Process.env.DB_NAME,
    host: Process.env.DB_HOST,
    port: Process.env.DB_PORT,
    dialect: Process.env.DB_DIALECT
  };
  const production = {
    username: Process.env.DB_USERNAME,
    password: Process.env.DB_PASSWORD,
    database: Process.env.DB_NAME,
    host: Process.env.DB_HOST,
    port: Process.env.DB_PORT,
    dialect: Process.env.DB_DIALECT
  };

  module.exports = {
    development,
    test,
    production
  };