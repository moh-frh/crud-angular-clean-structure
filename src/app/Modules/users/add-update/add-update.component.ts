import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';

import notify from 'devextreme/ui/notify';
import { Location } from '@angular/common';

import { Router } from '@angular/router';
import { UsersService } from 'core/service/users.service';
import { HttpClient } from '@angular/common/http';
import { UserWebRepository } from 'infra/user-web.repository';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss'],

  providers: [
    { provide: UsersService,
      useFactory: (usersService: UsersService, http: HttpClient) => {
        return usersService.createUser;
      },
      deps: [UsersService, HttpClient]
    }
  ],

})
export class AddUpdateComponent implements OnInit {
  @ViewChild('userForm') userForm: DxFormComponent;

  user: any = {};
  loadingVisible = false;

  usersService: UsersService; 


  constructor(private http: HttpClient, private location: Location) {

    const userRepository = new UserWebRepository(http);
    this.usersService = new UsersService(userRepository);
  }

  ngOnInit(): void {}

  onSubmit() {
    
    if (this.userForm.instance.validate().isValid) {
      this.addUser();
    } else {
      notify('User not added ', 'error', 1500);
    }
  }
  addUser() {

    this.loadingVisible = true;

    this.usersService.createUser(this.user).then(
      (res: any) => {

        this.loadingVisible = false;
        notify('User added successfully', 'success', 1500);
        // this.router.navigate('/users')
        this.location.back();
      },
      async (error: any) => {

        this.loadingVisible = false;
        console.log(error);
      }
    );
  }
}
