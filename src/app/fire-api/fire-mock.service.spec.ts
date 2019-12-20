import { TestBed } from '@angular/core/testing';

import { FireMockService } from './fire-mock.service';

describe('FireMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireMockService = TestBed.get(FireMockService);
    expect(service).toBeTruthy();
  });
});
