const env = require("env-var");

const required = process.env.NODE_ENV !== "test";

const application = Object.freeze({
  port: env.get("PORT").required(required).asIntPositive(),
  environment: env.get("NODE_ENV").default("development").asString(),
});

module.exports = application;
