import { TestBed } from '@angular/core/testing';

import { CercaImmagineService } from './cerca-immagine.service';

describe('CercaImmagineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CercaImmagineService = TestBed.get(CercaImmagineService);
    expect(service).toBeTruthy();
  });
});
