import { TestBed } from '@angular/core/testing';

import { StatofatturaService } from './statofattura.service';

describe('StatofatturaService', () => {
  let service: StatofatturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatofatturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
