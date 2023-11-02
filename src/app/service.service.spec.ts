import { TestBed } from '@angular/core/testing';

import { CrudServiceService } from './service.service';

describe('ServiceService', () => {
  let service: CrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
