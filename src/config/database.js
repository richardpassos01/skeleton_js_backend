const env = require("env-var");
const path = require('path');
const application = require('./application');

const database = Object.freeze({
  client: "sqlite3",
  connection: {
    filename: path.resolve('./data', `database-${application.environment}.sqlite`),
  },
  tables: {
    users: "users",
  },
});

module.exports = database;
