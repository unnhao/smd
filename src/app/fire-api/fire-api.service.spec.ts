import { TestBed } from '@angular/core/testing';

import { FireAPIService } from './fire-api.service';

describe('FireAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireAPIService = TestBed.get(FireAPIService);
    expect(service).toBeTruthy();
  });
});
