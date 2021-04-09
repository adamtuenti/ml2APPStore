import { TestBed } from '@angular/core/testing';

import { CategoriasLocalesService } from './categorias-locales.service';

describe('CategoriasLocalesService', () => {
  let service: CategoriasLocalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriasLocalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
