import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { PropiedadCardComponent } from '../../components/propiedad-card/propiedad-card.component';
import { Propiedad } from '../../models/Propiedad';
import { PropiedadService } from '../../services/propiedad/propiedad.service';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    PropiedadCardComponent,
  ],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.scss',
})
export class PropiedadesComponent {
  propiedades: Propiedad[] = [];

  constructor(private propiedadService: PropiedadService) {}

  ngOnInit(): void {
    this.cargarPropiedades();
  }

  cargarPropiedades() {
    this.propiedadService
      .getPropiedades()
      .then((post) => {
        this.propiedades = post;
        console.log(this.propiedades);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
