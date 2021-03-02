import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { DxButtonModule, DxDataGridModule, DxFormModule, DxLoadPanelModule } from 'devextreme-angular';
import { AddUpdateComponent } from './add-update/add-update.component';


@NgModule({
  declarations: [UsersComponent, AddUpdateComponent],
  imports: [CommonModule, UsersRoutingModule, DxButtonModule, DxDataGridModule, DxLoadPanelModule, DxFormModule],

})
export class UsersModule {}
