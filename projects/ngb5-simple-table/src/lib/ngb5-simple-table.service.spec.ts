import { TestBed } from '@angular/core/testing';

import { Ngb5SimpleTableService } from './ngb5-simple-table.service';

describe('Ngb5SimpleTableService', () => {
  let service: Ngb5SimpleTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ngb5SimpleTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
