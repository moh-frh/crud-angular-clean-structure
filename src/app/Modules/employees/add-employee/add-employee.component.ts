import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from 'core/service/employees.service';

import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { EmployeeWebRepository } from 'infra/employee-web.repository';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],

  providers: [
    { provide: EmployeesService,
      useFactory: (employeesService: EmployeesService, http: HttpClient) => {
        return employeesService.createEmployee;
      },
      deps: [EmployeesService, HttpClient] 
    }
  ],

})
export class AddEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') employeeForm: DxFormComponent; 

  employee: any = {};
  loadingVisible = false;

  usersService: EmployeesService;
 
  constructor(private http: HttpClient) {
    const userRepository = new EmployeeWebRepository(http);
    this.usersService = new EmployeesService(userRepository);
  }

  ngOnInit(): void {}

  onSubmit() {
 
    console.log("click on submit - employee");
    
    
    if (this.employeeForm.instance.validate().isValid) {
    console.log("onSubmit-if - employee");

      this.addUser();
    } else {
    console.log("onSubmit-else - employee");

      notify('User not added ', 'error', 1500);
    }
  }
  addUser() {
    console.log("addUser - employee");

    this.loadingVisible = true;

    this.usersService.createEmployee(this.employee).then(
      (res: any) => {
        console.log("addUser - res - employee");

        this.loadingVisible = false;
        notify('employee added successfully', 'success', 1500);
        // this.router.navigate('/users')
        // this.location.back();
      },
      async (error: any) => {
    console.log("addUser- error - employee");


        this.loadingVisible = false;
        console.log(error);
      }
    );
  }

}
