import { TestBed } from '@angular/core/testing';

import { ProDataService } from './pro-data.service';

describe('ProDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProDataService = TestBed.get(ProDataService);
    expect(service).toBeTruthy();
  });
});
