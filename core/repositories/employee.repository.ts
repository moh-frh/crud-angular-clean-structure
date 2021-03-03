import { EmployeeModel } from "../domain/employee.model";

export abstract class EmployeeRepository {
    abstract getAllEmployees(): Promise<EmployeeModel[]>;
    abstract createEmployee(data: any): Promise<EmployeeModel>;
    abstract deleteEmployee(id: any): Promise<EmployeeModel>;
    abstract updateEmployee(id: any, data: EmployeeModel): Promise<EmployeeModel>; 
  }