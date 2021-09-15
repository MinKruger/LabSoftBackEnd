class GetAllUsersUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async handle() {
    const users = await this.userRepository.getAll();

    return users;
  }
}

exports.GetAllUsersUseCase = GetAllUsersUseCase;
