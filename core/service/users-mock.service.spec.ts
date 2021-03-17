import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

// import { UsersComponent } from '@app/Modules/users/users.component';
import { UsersComponent } from '../../src/app/Modules/users/users.component';

// import { UserWebRepository } from 'infra/user-web.repository';
import { UserWebRepository } from '../../infra/user-web.repository';

import { UsersService } from './users.service';
// import { UserMockRepository } from 'infra/user-mock.repository';
import { UserMockRepository } from '../../infra/user-mock.repository';



const usersFactory = (http: HttpClient) => {
  // console.log('mock factory !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  // console.log(http);

  // let userRepository = new UserWebRepository(http);
  const userMockRepository = new UserMockRepository();

  return new UsersService(userMockRepository);
};

const users = [
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

describe('UsersService', () => {

  let service: UsersService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UsersComponent],
            providers: [
                {
                  provide: UsersService,
                  useFactory: usersFactory,
                },
              ],
    });
    service = TestBed.inject(UsersService);
  });

  test('test injection of Users-service', () => {
    expect(service).toBeTruthy(); 
  });

  test('test getAllUsers', async () => {
    expect(await service.getAllUsers()).toEqual(users);
  });

  test('test add User', async () => {
    const mockAddValue = { id: 100, firstName: 'Mr. mounir', lastName: 'mounir', age: 44 } 

    service.createUser(mockAddValue)

    expect(await service.getAllUsers()).toEqual(users.concat(mockAddValue));
  });

  test('test remove User', async() => {

    service.deleteUser(1)
    service.deleteUser(3)

    expect( await service.getAllUsers()).toEqual(users.splice(1,1));
  });  

});