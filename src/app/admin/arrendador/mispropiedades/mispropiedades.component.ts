import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendadorComponent } from '../../../components/arrendador/sidebararrendador/sidebararrendador.component';
import { PropiedadAdminArrendadorComponent } from '../../../components/arrendador/propiedad-admin-arrendador/propiedad-admin-arrendador.component';
import { Propiedad } from '../../../models/Propiedad';
import { PropiedadService } from '../../../services/propiedad/propiedad.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mispropiedades',
  standalone: true,
  imports: [
    NavbardashboardComponent,
    SidebararrendadorComponent,
    PropiedadAdminArrendadorComponent,
    CommonModule
  ],
  templateUrl: './mispropiedades.component.html',
  styleUrl: './mispropiedades.component.scss',
})
export class MispropiedadesComponent {
  propiedades: Propiedad[] = [];

  constructor(private propiedadService: PropiedadService) {}

  ngOnInit(): void {
    this.cargarPropiedades();
  }

  cargarPropiedades() {
    this.propiedadService
      .getPropiedadesByPropietario()
      .then((post) => {
        this.propiedades = post;
        console.log(this.propiedades);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
