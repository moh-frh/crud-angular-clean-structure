
// import { EmployeeRepository } from 'core/repositories/employee.repository';
import { EmployeeRepository } from '../core/repositories/employee.repository';

import { EmployeeModel } from 'core/domain/employee.model';

const rootUrl = 'http://localhost:3000/';

const employeesUrl = `${rootUrl}employees/`;

export class EmployeeWebRepository extends EmployeeRepository {
  http: any;
  
  getAllEmployees(): Promise<EmployeeModel[]> {
    return this.http.get(employeesUrl).toPromise();
  }
  createEmployee(data: any): Promise<EmployeeModel> {
    return this.http.post(employeesUrl, data).toPromise();
  }
  deleteEmployee(id: any): Promise<EmployeeModel> {
    return this.http.delete(employeesUrl + id).toPromise();
  }
  updateEmployee(id: any, data: EmployeeModel): Promise<EmployeeModel> {
    return this.http.put(employeesUrl + id, data).toPromise();
  }


  constructor(http: any) {
    super();
    this.http = http;
  }
}
