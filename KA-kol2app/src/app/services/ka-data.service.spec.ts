import { TestBed } from '@angular/core/testing';

import { KADataService } from './ka-data.service';

describe('KADataService', () => {
  let service: KADataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KADataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
