const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class UserController {
  constructor(createUser, authenticateUser, updateUserPassword) {
    this.createUser = createUser;
    this.authenticateUser = authenticateUser;
    this.updateUserPassword = updateUserPassword;
  }

  create(req, res, next) {
    const { name, email, password } = req.body;

    return this.createUser
      .execute(name, email, password)
      .then(() => res.status(StatusCodes.CREATED).send(ReasonPhrases.CREATED))
      .catch(next);
  }

  authenticate(req, res, next) {
    const { email, password } = req.body;

    return this.authenticateUser
      .execute(email, password)
      .then((token) => res.status(StatusCodes.OK).send(token))
      .catch(next);
  }

  updatePassword(req, res, next) {
    const { email, password } = req.body;

    return this.updateUserPassword
      .execute(email, password)
      .then(() => res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.NO_CONTENT))
      .catch(next);
  }
}

module.exports = UserController;
