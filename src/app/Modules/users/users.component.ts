import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { UserModel } from '../../../../core/domain/user.model';
// import { UsersService } from 'core/service/users.service';
import { UsersService } from '../../../../core/service/users.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  title = 'users list';

  // users: Array<UserModel>;

  dataSource: CustomStore;
  columns = ['firstName', 'lastName', 'sex', 'age', { type: 'buttons', buttons: ['delete', 'edit'] }];

  constructor(private usersService: UsersService) {
    this.dataSource = new CustomStore({
      key: 'id',

      load: this.usersService.getAllUsers.bind(this.usersService),
      update: this.usersService.updateUser.bind(this.usersService),
      insert: this.usersService.createUser.bind(this.usersService),
      remove: this.usersService.deleteUser.bind(this.usersService),
    });
  }

  ngOnInit(): void {}

  onRowUpdating(e: any) {
    console.log(e);

    const tmp: UserModel = { id: null, firstName: null, lastName: null, age: null };
    Object.assign(tmp, e.oldData);
    Object.assign(tmp, e.newData);

    e.newData = tmp;
  }
}
