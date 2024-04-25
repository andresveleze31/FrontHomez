import { TestBed } from '@angular/core/testing';

import { CalificarArrendadorService } from './calificar-arrendador.service';

describe('CalificarArrendadorService', () => {
  let service: CalificarArrendadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalificarArrendadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
