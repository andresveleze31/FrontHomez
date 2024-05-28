import { TestBed } from '@angular/core/testing';

import { ComentPropiedadService } from './coment-propiedad.service';

describe('ComentPropiedadService', () => {
  let service: ComentPropiedadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentPropiedadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
