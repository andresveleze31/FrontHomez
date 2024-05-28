import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendatarioComponent } from '../../../components/arrendatario/sidebararrendatario/sidebararrendatario.component';
import { Solicitud } from '../../../models/Solicitud';
import { SolicitudService } from '../../../services/solicitud/solicitud.service';
import { SolicitudAdminArrendatarioComponent } from '../../../components/arrendatario/solicitud-admin-arrendatario/solicitud-admin-arrendatario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-arrendatario',
  standalone: true,
  imports: [NavbardashboardComponent, SidebararrendatarioComponent, SolicitudAdminArrendatarioComponent, CommonModule],
  templateUrl: './dashboard-arrendatario.component.html',
  styleUrl: './dashboard-arrendatario.component.scss',
})
export class DashboardArrendatarioComponent {
  solicitudes: Solicitud[] = [];

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit(): void {
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {
    this.solicitudService
      .getSolicitudesByArrendatario()
      .then((post) => {
        this.solicitudes = post;
        console.log(this.solicitudes);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
