import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUpdateComponent } from './add-update/add-update.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'add-edit', component: AddUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
