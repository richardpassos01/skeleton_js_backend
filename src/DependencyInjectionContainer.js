const Database = require("./infrastructure/database");

const UserController = require("./api/user/UserController");

const CreateUser = require("./application/use_cases/CreateUser");
const AuthenticateUser = require("./application/use_cases/AuthenticateUser");
const UpdateUserPassword = require("./application/use_cases/UpdateUserPassword");

const UserRepository = require("./infrastructure/repositories/UserRepository");

const database = Database.getInstance();

const userRepository = new UserRepository(database);

const createUser = new CreateUser(userRepository);
const authenticateUser = new AuthenticateUser(userRepository);
const updateUserPassword = new UpdateUserPassword(userRepository);

const userController = new UserController(createUser, authenticateUser, updateUserPassword);

module.exports = {
  database,
  userController,
  userRepository,
  authenticateUser,
};
