import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MobileNavbarServiceService } from '../../services/navbarservice/mobile-navbar-service.service';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss',
})
export class MobileNavbarComponent {
  constructor(private navbarService: MobileNavbarServiceService) {}

  get display(): boolean {
    return this.navbarService.getMenuStatus();
  }

  
}
