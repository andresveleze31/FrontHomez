import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { MobileNavbarServiceService } from '../../services/navbarservice/mobile-navbar-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  href: string = '';
  constructor(private navbarService: MobileNavbarServiceService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('idHomezArrendador');
    const token2 = localStorage.getItem('idHomezArrendatario');
    if (token != null) {
      this.href = '/homez/arrendador/dashboard';
    } else if (token2 != null) {
      this.href = '/homez/arrendatario/dashboard';
    } else {
      this.href = '/homez/register/arrendador';
    }
  }

  toggleMenu() {
    this.navbarService.toggleMenu();
  }

  sidebarVisible2: boolean = false;
}
