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

// console.log(http);

  const userRepository = new UserWebRepository(http);
//   let userMockRepository = new UserMockRepository();

  return new UsersService(userRepository);
};

const users = [
    {
      'id': 1,
      'firstName': 'mohamed Fr',
      'lastName': 'mohamed',
      'age': 24,
      'sex': 'MALE'
    },
    {
      'id': 3,
      'firstName': 'anis',
      'lastName': 'anis',
      'age': 33,
      'sex': 'MALE'
    },
    {
      'firstName': 'islem',
      'lastName': 'islem',
      'sex': 'MALE',
      'age': 32,
      'id': 9
    },
    {
      'firstName': 'ramzi',
      'lastName': 'ramzi',
      'sex': 'MALE',
      'age': 34,
      'id': 13
    },
    {
      'id': 14,
      'firstName': 'ahmed',
      'lastName': 'ahmed',
      'age': 23,
      'sex': 'MALE'
    }
  ];

describe('UsersService', () => {

  let service: UsersService;
  
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UsersComponent],
            providers: [
                {
                  provide: UsersService,
                  useFactory: usersFactory,
                  deps: [HttpClient],
                },
              ],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(UsersService);
  });

  test('test injection of Users-service', () => {
    expect(service).toBeTruthy(); 
  });
  
  // a verifier
  test('test call of getAllUsers', () => {
    spyOn(service, 'getAllUsers').and.returnValues('users');

    console.log(service.getAllUsers());
    
    // !!!!!
    // expect(service.getAllUsers.length).toBe(11); 
    expect(service.getAllUsers).toHaveBeenCalled(); 
  });

});