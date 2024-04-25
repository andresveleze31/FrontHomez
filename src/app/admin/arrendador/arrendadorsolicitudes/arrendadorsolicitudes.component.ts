import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendadorComponent } from '../../../components/arrendador/sidebararrendador/sidebararrendador.component';
import { SolicitudAdminArrendadorComponent } from '../../../components/arrendador/solicitud-admin-arrendador/solicitud-admin-arrendador.component';
import { Solicitud } from '../../../models/Solicitud';
import { SolicitudService } from '../../../services/solicitud/solicitud.service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ModalEstadoComponent } from '../../../components/modal-estado/modal-estado.component';

@Component({
  selector: 'app-arrendadorsolicitudes',
  standalone: true,
  imports: [
    NavbardashboardComponent,
    SidebararrendadorComponent,
    SolicitudAdminArrendadorComponent,
    CommonModule,
    DialogModule,
    ModalEstadoComponent,
  ],
  templateUrl: './arrendadorsolicitudes.component.html',
  styleUrl: './arrendadorsolicitudes.component.scss',
})
export class ArrendadorsolicitudesComponent {
  solicitudes: Solicitud[] = [];

  mostrarModalEstado: Boolean; 
  constructor(private solicitudService: SolicitudService) {
    this.mostrarModalEstado = false
  }

  showModalEstado(){
    this.mostrarModalEstado = !this.mostrarModalEstado;
  }

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

  visible: boolean = true;

  showDialog() {
    this.visible = true;
  }
}
