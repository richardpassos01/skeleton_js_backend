const User = require("../../domain/user/User");

class UpdateUserPassword {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(email, password) {
    const data = await this.userRepository.findByEmail(email);

    if (!data.length) {
      throw new Error("User not found");
    }
    const [{ name, id }] = data;

    const user = new User(name, email, id);

    user.setPassword(password);

    return this.userRepository.update(user);
  }
}

module.exports = UpdateUserPassword;
