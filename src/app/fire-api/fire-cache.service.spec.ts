import { TestBed } from '@angular/core/testing';

import { FireCacheService } from './fire-cache.service';

describe('FireCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireCacheService = TestBed.get(FireCacheService);
    expect(service).toBeTruthy();
  });
});
