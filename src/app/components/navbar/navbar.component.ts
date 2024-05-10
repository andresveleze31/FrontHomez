import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  sidebarVisible2: boolean = false;

}
