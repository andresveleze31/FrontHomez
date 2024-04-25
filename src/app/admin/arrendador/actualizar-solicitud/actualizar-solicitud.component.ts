import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendadorComponent } from '../../../components/arrendador/sidebararrendador/sidebararrendador.component';
import { Estado } from '../../../models/Estado';
import { EstadoService } from '../../../services/estado/estado.service';
import { Solicitud } from '../../../models/Solicitud';
import { SolicitudService } from '../../../services/solicitud/solicitud.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-solicitud',
  standalone: true,
  imports: [
    NavbardashboardComponent,
    SidebararrendadorComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './actualizar-solicitud.component.html',
  styleUrl: './actualizar-solicitud.component.scss',
})
export class ActualizarSolicitudComponent {
  estados: Estado[] = [];
  solicitud: Solicitud;
  propertyId: string | null = null;

  constructor(
    private estadoService: EstadoService,
    private solicitudService: SolicitudService,
    private route: ActivatedRoute
  ) {
    this.solicitud = new Solicitud();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.propertyId = params.get('id');
    });
    this.cargarEstados();
    this.cargarSolicitud();
  }

  actualizarEstado(event: Event) {
    event.preventDefault();
    this.solicitudService.updateSolicitud(this.solicitud);
  }

  cargarEstados() {
    this.estadoService
      .getTipos()
      .then((post) => {
        this.estados = post;
        console.log(this.estados);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  cargarSolicitud() {
    this.solicitudService
      .getSolicitudById(Number(this.propertyId))
      .then((post) => {
        this.solicitud = post;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
