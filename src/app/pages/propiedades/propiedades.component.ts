import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.scss',
})
export class PropiedadesComponent {}
