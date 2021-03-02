import { Observable } from 'rxjs';
import { UserModel } from '../domain/user.model';

export abstract class UserRepository {
  abstract getAllUsers(): Promise<UserModel[]>;
  abstract createUser(data: any): Promise<UserModel>;
  abstract deleteUser(id: any): Promise<UserModel>;
  abstract updateUser(id: any, data: UserModel): Promise<UserModel>;
}
