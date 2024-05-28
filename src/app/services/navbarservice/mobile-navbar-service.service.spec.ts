import { TestBed } from '@angular/core/testing';

import { MobileNavbarServiceService } from './mobile-navbar-service.service';

describe('MobileNavbarServiceService', () => {
  let service: MobileNavbarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileNavbarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
