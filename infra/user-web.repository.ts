// import { UserRepository } from 'core/repositories/user.repository';
import { UserRepository } from '../core/repositories/user.repository';


import { UserModel } from 'core/domain/user.model';

const rootUrl = 'http://localhost:3000/';

const usersUrl = `${rootUrl}users/`;

export class UserWebRepository extends UserRepository {

  constructor(private http: any) {
    super();
  }

  getAllUsers(): Promise<UserModel[]> {
    // console.log('getAllUsers -- infra -- users.web.repository');
    return this.http.get(usersUrl).toPromise();
  }

  createUser(data: any): Promise<UserModel> {
    return this.http.post(usersUrl, data).toPromise();
  }

  updateUser(id: any, data: UserModel): Promise<UserModel> {
    return this.http.put(usersUrl + id, data).toPromise();
  }

  deleteUser(id: any): Promise<UserModel> {
    return this.http.delete(usersUrl + id).toPromise();
  }

  
}
