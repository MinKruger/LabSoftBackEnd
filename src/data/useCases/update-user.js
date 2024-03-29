class UpdateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async handle(data) {
    const user = await this.userRepository.create(data);

    return user;
  }
}

exports.UpdateUserUseCase = UpdateUserUseCase;
