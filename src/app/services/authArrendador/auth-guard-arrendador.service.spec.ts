import { TestBed } from '@angular/core/testing';

import { AuthGuardArrendadorService } from './auth-guard-arrendador.service';

describe('AuthGuardArrendadorService', () => {
  let service: AuthGuardArrendadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardArrendadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
