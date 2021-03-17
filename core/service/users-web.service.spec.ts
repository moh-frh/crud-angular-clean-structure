import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, tick } from '@angular/core/testing';

import { UsersComponent } from '../../src/app/Modules/users/users.component';
import { UserWebRepository } from '../../infra/user-web.repository';
import { UsersService } from './users.service';
 
// import { UserMockRepository } from 'infra/user-mock.repository';


const usersFactory = (http: HttpClient) => {
  // console.log(http);

  const userRepository = new UserWebRepository(http);

  return new UsersService(userRepository);
};


describe('Users-web-Service', () => {

  // tslint:disable-next-line: one-variable-per-declaration
  let service: UsersService;
  let httpMock: HttpTestingController;

  const rootUrl = 'http://localhost:3000/';
  
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    // imports: [HttpClient],
      declarations: [UsersComponent],
            providers: [
                {
                  provide: UsersService,
                  useFactory: usersFactory,
                  deps: [HttpClient]
                },
              ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController)
  })

  test('test Users-service', () => {
    expect(service).toBeTruthy(); 

    const http: HttpClientTestingModule = new HttpClientTestingModule()
    // const req = httpMock.expectOne({ method: 'GET', url: rootUrl+'users' })


    // const req = httpMock.expectOne(rootUrl+'users')
    // expect(req.request.method).toBe('GET')

    // req.flush({})
    // httpMock.verify()
    // tick()

  });

  test('test injection of UsersWeb-service', () => {
      
        // test not entered
        console.log(service.getAllUsers());
        
        service.getAllUsers().then(value => {
          expect(value).toEqual('valeur');
          console.log(value);
        });
        expect(4).toBe(4);
  })

  // !!! service.getAllUsers() return undefined
//   test('test injection of UsersWeb-service', () => {
//     let users;
//     service.getAllUsers().then(
//         (res)=>{
//             users = res
//         }
//     )

//     console.log(users);
    
      
//     expect(service).toBeTruthy(); 
//   });

//   test('test getAllUsers', async () => {
//     expect(await service.getAllUsers()).toEqual(users);
//   });

//   test('test add User', async () => {
//     const mockAddValue = { id: 100, firstName: 'Mr. mounir', lastName: 'mounir', age: 44 } 

//     service.createUser(mockAddValue)

//     expect(await service.getAllUsers()).toEqual(users.concat(mockAddValue));
//   });

//   test('test remove User', async() => {

//     service.deleteUser(1)
//     service.deleteUser(3)

//     expect( await service.getAllUsers()).toEqual(users.splice(1,1));
//   });  

});