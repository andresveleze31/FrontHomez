import { TestBed } from '@angular/core/testing';

import { AuthGuardArrendatarioService } from './auth-guard-arrendatario.service';

describe('AuthGuardArrendatarioService', () => {
  let service: AuthGuardArrendatarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardArrendatarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
