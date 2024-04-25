import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendatarioComponent } from '../../../components/arrendatario/sidebararrendatario/sidebararrendatario.component';
import { SolicitudAdminArrendatarioComponent } from '../../../components/arrendatario/solicitud-admin-arrendatario/solicitud-admin-arrendatario.component';
import { Solicitud } from '../../../models/Solicitud';
import { SolicitudService } from '../../../services/solicitud/solicitud.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arrendatariosolicitudes',
  standalone: true,
  imports: [
    NavbardashboardComponent,
    SidebararrendatarioComponent,
    SolicitudAdminArrendatarioComponent,
    CommonModule
  ],
  templateUrl: './arrendatariosolicitudes.component.html',
  styleUrl: './arrendatariosolicitudes.component.scss',
})
export class ArrendatariosolicitudesComponent {
  solicitudes: Solicitud[] = [];

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit(): void {
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {
    this.solicitudService
      .getSolicitudesByPropietario()
      .then((post) => {
        this.solicitudes = post;
        console.log(this.solicitudes);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
