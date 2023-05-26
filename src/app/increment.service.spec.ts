import { TestBed } from '@angular/core/testing';

import { IncrementService } from './increment.service';

describe('IncrementService', () => {
  let service: IncrementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
