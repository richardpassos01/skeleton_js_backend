const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const schemaValidator = require("../middleware/schemaValidator");
const authentication = require("../middleware/authentication");

const {
  createUserSchema,
  authenticateUserSchema,
  updatePasswordSchema
} = require("./user/schema/input/userSchemas");

const {
  userController,
} = require("../DependencyInjectionContainer");

const router = Router();

router.get("/healthy-check", (_, Response) =>
  Response.status(StatusCodes.OK).send(ReasonPhrases.OK)
);
router.post("/user", schemaValidator.body(createUserSchema), (...args) =>
  userController.create(...args)
);
router.post("/user/authenticate", schemaValidator.body(authenticateUserSchema), (...args) =>
  userController.authenticate(...args)
);
router.patch("/user/update-password", authentication, schemaValidator.body(updatePasswordSchema), (...args) =>
  userController.updatePassword(...args)
);


module.exports = router;
