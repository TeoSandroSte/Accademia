import { TestBed } from '@angular/core/testing';

import { DatiService } from './dati.service';

describe('DatiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatiService = TestBed.get(DatiService);
    expect(service).toBeTruthy();
  });
});
