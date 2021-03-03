import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeModel, StatesModel } from 'core/domain/employee.model';
import { EmployeesService } from 'core/service/employees.service';

import CustomStore from 'devextreme/data/custom_store';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Array<EmployeeModel>;

  dataSource: CustomStore;
  statesDataSource : StatesModel[] = [
    {
      id: 1,
      stateName: 'boumerdes',
      stateCode: 35,
    },
    {
      id: 2,
      stateName: 'alger',
      stateCode: 16,
    },
  ]
  columns = ['name', 'post', { type: 'buttons', buttons: ['delete', 'edit'] }];

  constructor(private http: HttpClient, private employeesService: EmployeesService) {
    this.dataSource = new CustomStore({
      key: 'id',

      load: this.employeesService.getAllEmployees.bind(this.employeesService), 
      update: this.employeesService.updateEmployee.bind(this.employeesService),
      insert: this.employeesService.createEmployee.bind(this.employeesService),
      remove: this.employeesService.deleteEmployee.bind(this.employeesService),
    });
  }
 
  ngOnInit(): void {}

  onRowUpdating(e: any) {
    console.log(e);

    const tmp: EmployeeModel = { id: null, name: null, post: null };
    Object.assign(tmp, e.oldData);
    Object.assign(tmp, e.newData);

    e.newData = tmp;
  }

}
