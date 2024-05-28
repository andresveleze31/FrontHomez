import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileNavbarServiceService {
  private display: boolean = false;

  toggleMenu() {
    this.display = !this.display;
  }

  getMenuStatus(): boolean {
    return this.display;
  }
}
