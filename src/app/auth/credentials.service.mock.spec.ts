import { TestBed, inject } from '@angular/core/testing';

import { MockCredentialsService } from './credentials.service.mock';

describe('CredentialsMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockCredentialsService],
    });
  });

  it('should be created', inject([MockCredentialsService], (service: MockCredentialsService) => {
    expect(service).toBeTruthy();
  }));
});
