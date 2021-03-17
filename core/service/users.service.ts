import { UserRepository } from '../repositories/user.repository';

import { UserModel } from '../domain/user.model';

export class UsersService {
  // userRepository: UserRepository;
 
  constructor(public userRepository: UserRepository) {
    // this.userRepository = userRepository;
  }

  getAllUsers(): Promise<UserModel[]> {
    // console.log('getAllUsers -- users.service');
    return this.userRepository.getAllUsers(); 
  }

  createUser(data: any): Promise<UserModel> {
    return this.userRepository.createUser(data);
  }
  deleteUser(id: any): Promise<UserModel> {
    // console.log('delete');

    return this.userRepository.deleteUser(id);
  }
  updateUser(id: any, data: UserModel): Promise<UserModel> {
    return this.userRepository.updateUser(id, data);
  }
}
