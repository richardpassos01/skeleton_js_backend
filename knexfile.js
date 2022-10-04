const Config = require("./src/config");

const default_config = {
  client: Config.database.client,
  connection: Config.database.connection,
  migrations: {
    directory: `${__dirname}/src/infrastructure/database/migrations`,
    tableName: "knex_migrations",
  },
  seeds: {
    directory: `${__dirname}/src/infrastructure/database/seeds`,
  },
  useNullAsDefault: true,
};

const testConnection = {
  ...Config.database.connection,
  database: `${Config.database.connection.database}-test`,
};

module.exports = {
  development: default_config,
  test: {
    ...default_config,
    connection: testConnection,
  },
};
