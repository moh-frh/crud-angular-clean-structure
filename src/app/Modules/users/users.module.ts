import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { DxButtonModule, DxDataGridModule, DxFormModule, DxLoadPanelModule } from 'devextreme-angular';
import { AddUpdateComponent } from './add-update/add-update.component';
import { UsersService } from 'core/service/users.service';
import { HttpClient } from '@angular/common/http';
import { UserWebRepository } from 'infra/user-web.repository';

const usersFactory = (http: HttpClient) => {
  console.log('factory !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  console.log(http);

  let userRepository = new UserWebRepository(http);
  return new UsersService(userRepository);
};

@NgModule({
  declarations: [UsersComponent, AddUpdateComponent],
  imports: [CommonModule, UsersRoutingModule, DxButtonModule, DxDataGridModule, DxLoadPanelModule, DxFormModule],

  providers: [
    {
      provide: UsersService,
      useFactory: usersFactory,
      deps: [HttpClient],
    },
  ],
})
export class UsersModule {}
