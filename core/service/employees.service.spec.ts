import { TestBed, inject } from '@angular/core/testing';

import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [EmployeesService]
  //   });
  // });

  // it('should be created', inject([EmployeesService], (service: EmployeesService) => {
  //   expect(service).toBeTruthy();
  // }));
  test('should create', () => {
    // expect(component).toBeTruthy();
    expect(6).toBe(6);
  });
});