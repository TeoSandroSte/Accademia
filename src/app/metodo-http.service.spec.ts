import { TestBed } from '@angular/core/testing';

import { MetodoHttpService } from './metodo-http.service';

describe('MetodoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetodoHttpService = TestBed.get(MetodoHttpService);
    expect(service).toBeTruthy();
  });
});
