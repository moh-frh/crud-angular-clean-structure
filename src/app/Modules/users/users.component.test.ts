import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DxButtonModule, DxDataGridModule, DxLoadPanelModule, DxFormModule } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { UserMockRepository } from 'infra/user-mock.repository';
import { exception } from 'node:console';
// import { UsersService } from 'core/service/users.service';
import { UsersService } from '../../../../core/service/users.service';

// import { UserWebRepository } from 'infra/user-web.repository';
import { UserWebRepository } from '../../../../infra/user-web.repository';

import { UsersComponent } from './users.component';

const usersFactory = (http: HttpClient) => {
    // console.log('factory !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    // console.log(http);
  
    const userRepository = new UserWebRepository(http);
    return new UsersService(userRepository);
  };
  
describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    let service: UsersService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            
            imports: [
                HttpClientTestingModule,
                DxButtonModule, DxDataGridModule, DxLoadPanelModule, DxFormModule
            ],
            declarations: [UsersComponent],
            providers: [
                {
                  provide: UsersService,
                  useFactory: usersFactory,
                  deps: [HttpClient],
                },
              ],
        }).compileComponents();

        service = TestBed.inject(UsersService);

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    test('test users-component', () => {
        expect(component).toBeTruthy(); 
    });

    test(`test title if == users-list`, () => {
        const fixture = TestBed.createComponent(UsersComponent); 
        const app = fixture.componentInstance;
        expect(app.title).toEqual('users list');
    });

    test(`test column`, () => {
        const fixture = TestBed.createComponent(UsersComponent); 
        const app = fixture.componentInstance;

        expect(app.columns.length).toBe(5);
        expect(app.columns).toEqual(['firstName', 'lastName', 'sex', 'age', { type: 'buttons', buttons: ['delete', 'edit'] }]);
    });



    // test(`test constructor - users`, () => {
    //     const dataSource: CustomStore = new CustomStore({
    //         key: 'id',
    //     })
    //     console.log(dataSource.key);

    //     expect(dataSource.key).toEqual('id');
    // });

    // test('test injection of Users-service', () => {
    //     expect(service).toBeTruthy(); 
    // });

    // test('test getAllUsers', () => {
    //     let allUsers: any = service.getAllUsers()

    //     // let allUsers: any = userMockRepo.getAllUsers()


    //     expect(service.getAllUsers()).toEqual(allUsers);

    //     console.log('#################################################################');
    //     console.log(allUsers);
    //     console.log('#################################################################');

        
    // });

});