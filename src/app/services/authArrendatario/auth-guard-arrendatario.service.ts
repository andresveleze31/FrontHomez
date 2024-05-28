import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardArrendatarioService implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedArrendatario()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
