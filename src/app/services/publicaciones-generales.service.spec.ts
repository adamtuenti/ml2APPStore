import { TestBed } from '@angular/core/testing';

import { PublicacionesGeneralesService } from './publicaciones-generales.service';

describe('PublicacionesGeneralesService', () => {
  let service: PublicacionesGeneralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicacionesGeneralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
