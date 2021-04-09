import { TestBed } from '@angular/core/testing';

import { ProductosLocalesService } from './productos-locales.service';

describe('ProductosLocalesService', () => {
  let service: ProductosLocalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosLocalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
