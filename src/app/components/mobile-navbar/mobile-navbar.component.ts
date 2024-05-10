import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss'
})
export class MobileNavbarComponent {

  display: boolean = false;

  mostrarMenu(){
    this.display = !this.display;
  }



}
