import { TestBed } from '@angular/core/testing';

import { SugerenciaLocalesService } from './sugerencia-locales.service';

describe('SugerenciaLocalesService', () => {
  let service: SugerenciaLocalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugerenciaLocalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
