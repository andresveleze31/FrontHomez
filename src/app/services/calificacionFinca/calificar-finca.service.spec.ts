import { TestBed } from '@angular/core/testing';

import { CalificarFincaService } from './calificar-finca.service';

describe('CalificarFincaService', () => {
  let service: CalificarFincaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalificarFincaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
