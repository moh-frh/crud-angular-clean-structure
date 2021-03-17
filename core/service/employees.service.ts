import { EmployeeModel } from '../domain/employee.model';
import { EmployeeRepository } from '../repositories/employee.repository';

export class EmployeesService {
  employeeRepository: EmployeeRepository;

  constructor(employeeRepository: EmployeeRepository) {
    this.employeeRepository = employeeRepository
  }

  getAllEmployees(): Promise<EmployeeModel[]> {
    // console.log('all employeeeeeeees');
    
    return this.employeeRepository.getAllEmployees(); 
  }

  createEmployee(data: any): Promise<EmployeeModel> {
    return this.employeeRepository.createEmployee(data);
  }
  deleteEmployee(id: any): Promise<EmployeeModel> {
    // console.log('delete');

    return this.employeeRepository.deleteEmployee(id);
  }
  updateEmployee(id: any, data: EmployeeModel): Promise<EmployeeModel> {
    return this.employeeRepository.updateEmployee(id, data);
  }

}
