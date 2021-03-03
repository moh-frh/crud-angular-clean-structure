import { EmployeeModel } from 'core/domain/employee.model';
import { EmployeeRepository } from 'core/repositories/employee.repository';

export class EmployeeMockRepository extends EmployeeRepository {

    employees: EmployeeModel[] = [
        {
          id: 1,
          name: 'Mr. mohamed',
          post: 'dev',
        //   dateBegin: Date.now(),
        },
        {
          id: 2,
          name: 'Mr. nassim',
          post: 'concepteur',
        //   dateBegin: 24,
        },
      ];

  getAllEmployees(): Promise<EmployeeModel[]> {
    return Promise.all(this.employees);
  }

  createEmployee(data: any): Promise<any> {
    const tmp: any = this.employees.push(data);
    return Promise.all(tmp);
  }
  deleteEmployee(id: any): Promise<any> {
    let employee: any = this.employees.find((x) => x.id === id);
    let index = this.employees.indexOf(employee, 0);
    this.employees.splice(index, 1);

    return Promise.all(this.employees);
  }
  updateEmployee(id: any, data: EmployeeModel): Promise<any> {
    this.deleteEmployee(id);
    this.createEmployee(data);

    return Promise.all(this.employees);
  }
  

  constructor() {
    super();
  }

}
