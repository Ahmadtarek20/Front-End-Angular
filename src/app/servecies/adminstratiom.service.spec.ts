import { TestBed } from '@angular/core/testing';

import { AdminstratiomService } from './adminstratiom.service';

describe('AdminstratiomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminstratiomService = TestBed.get(AdminstratiomService);
    expect(service).toBeTruthy();
  });
});
