import { TestBed } from '@angular/core/testing';

import { PrivetCloseService } from './privet-close.service';

describe('PrivetCloseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivetCloseService = TestBed.get(PrivetCloseService);
    expect(service).toBeTruthy();
  });
});
