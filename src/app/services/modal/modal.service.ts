import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private displayModalEstado: boolean = false;

  toggleMenu() {
    this.displayModalEstado = !this.displayModalEstado;
  }

  getMenuStatus(): boolean {
    return this.displayModalEstado;
  }
}
