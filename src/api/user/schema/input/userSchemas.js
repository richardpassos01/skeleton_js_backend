const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
});

const authenticateUserSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
});

const updatePasswordSchema = Joi.object({
  email: Joi.string()
  .email({ tlds: { allow: false } })
  .required(),
  password: Joi.string().required(),
});

module.exports = {
  createUserSchema,
  authenticateUserSchema,
  updatePasswordSchema
};
