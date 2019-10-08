import { TestBed } from '@angular/core/testing';

import { FireBaseService } from './provider.service';

describe('ProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireBaseService = TestBed.get(FireBaseService);
    expect(service).toBeTruthy();
  });
});
