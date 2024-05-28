import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendadorComponent } from '../../../components/arrendador/sidebararrendador/sidebararrendador.component';
import { AuthServiceService } from '../../../services/auth/auth-service.service';
import { Propiedad } from '../../../models/Propiedad';
import { PropiedadService } from '../../../services/propiedad/propiedad.service';
import { CommonModule } from '@angular/common';
import { PropiedadAdminArrendadorComponent } from '../../../components/arrendador/propiedad-admin-arrendador/propiedad-admin-arrendador.component';

@Component({
  selector: 'app-dashboard-arrendador',
  standalone: true,
  imports: [
    NavbardashboardComponent,
    SidebararrendadorComponent,
    CommonModule,
    PropiedadAdminArrendadorComponent,
  ],
  templateUrl: './dashboard-arrendador.component.html',
  styleUrl: './dashboard-arrendador.component.scss',
})
export class DashboardArrendadorComponent {
  propiedades: Propiedad[] = [];

  constructor(
    private propiedadService: PropiedadService,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticatedArrendador();

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
