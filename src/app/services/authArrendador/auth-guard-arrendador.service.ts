import { Injectable } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardArrendadorService implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedArrendador()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
