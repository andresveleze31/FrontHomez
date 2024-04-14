import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.scss'
})
export class PropiedadesComponent {

}
