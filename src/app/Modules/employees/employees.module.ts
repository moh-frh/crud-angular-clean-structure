import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { DxButtonModule, DxDataGridModule, DxFormComponent, DxFormModule, DxLoadPanelModule } from 'devextreme-angular';

import { HttpClient } from '@angular/common/http';
import { EmployeeWebRepository } from 'infra/employee-web.repository';
import { EmployeesService } from 'core/service/employees.service';
import { EmployeesComponent } from './employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

// service Factory
const employeesFactory = (http: HttpClient) => {
  // usersService: UsersService
  console.log('factory employees!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  console.log(http);

  let employeeRepository = new EmployeeWebRepository(http);
  // employeeuserRepository: UserRepository
  return new EmployeesService(employeeRepository);
};

@NgModule({
  declarations: [EmployeesComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxLoadPanelModule,
    DxFormModule,
    DxFormModule,
  ],

  providers: [
    {
      provide: EmployeesService,
      useFactory: employeesFactory,
      deps: [HttpClient],
    },
  ],
})
export class EmployeesModule {}
