import { UserModel } from 'core/domain/user.model';
import { UserRepository } from 'core/repositories/user.repository';

export class UserMockRepository extends UserRepository {
  users: UserModel[] = [
    {
      id: 1,
      firstName: 'Mr. mohamed',
      lastName: 'fouaz',
      age: 23,
    },
    {
      id: 2,
      firstName: 'Mr. nassim',
      lastName: 'nassim',
      age: 24,
    },
    {
      id: 3,
      firstName: 'Mr. aymen',
      lastName: 'aymen',
      age: 21,
    },
  ];

  getUserById(id: number): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }

  getAllUsers(): Promise<UserModel[]> {
    // return Promise.resolve(this.users);
    return Promise.all(this.users);
  }

  createUser(data: any): Promise<any> {
    // return Promise.resolve(this.users);
    const tmp: any = this.users.push(data);
    return Promise.all(tmp);
  }

  deleteUser(id: number): Promise<any> {
    // return Promise.resolve(this.users);

    let user: any = this.users.find((x) => x.id === id);
    let index = this.users.indexOf(user, 0);
    this.users.splice(index, 1);

    return Promise.all(this.users);
  }

  updateUser(id: number, data: any): Promise<any> {
    // return Promise.resolve(this.users);

    this.deleteUser(id);
    this.createUser(data);

    return Promise.all(this.users);
  }

  constructor() {
    super();
  }

  // abstract getUserById(id: number): Observable<UserModel>
  // {

  // }
}
