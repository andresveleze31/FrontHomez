import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendatarioComponent } from '../../../components/arrendatario/sidebararrendatario/sidebararrendatario.component';
import { CommonModule } from '@angular/common';
import { CalificarFincaService } from '../../../services/calificacionFinca/calificar-finca.service';
import { Solicitud } from '../../../models/Solicitud';
import { ActivatedRoute } from '@angular/router';
import { SolicitudService } from '../../../services/solicitud/solicitud.service';
import { CalificarFinca } from '../../../models/CalificarFinca';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { Propiedad } from '../../../models/Propiedad';

@Component({
  selector: 'app-calificar-finca',
  standalone: true,
  imports: [
    NavbardashboardComponent,
    SidebararrendatarioComponent,
    CommonModule,
    FormsModule,
    RatingModule,
  ],
  templateUrl: './calificar-finca.component.html',
  styleUrl: './calificar-finca.component.scss',
})
export class CalificarFincaComponent {
  value!: number;
  comentario: string | null = null;
  propertyId: number | string | null = null;
  calificacion: CalificarFinca;
  solicitud: Solicitud | null;
  propiedad: Propiedad | undefined | null;

  constructor(
    private route: ActivatedRoute,
    private solicitudService: SolicitudService,
    private calificacionService: CalificarFincaService
  ) {
    this.calificacion = new CalificarFinca();
    this.solicitud = new Solicitud();
    this.propiedad = new Propiedad();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.propertyId = params.get('id');
    });

    this.cargarSolicitud();
  }

  cargarSolicitud() {
    // Externo
    this.solicitudService
      .getSolicitudById(Number(this.propertyId))
      .then((post) => {
        this.solicitud = post;
        this.propiedad = post.propiedad;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  agregarCalificacion(event: Event) {
    event.preventDefault();
    this.calificacion.comentario = this.comentario;
    this.calificacion.propiedad = this.propiedad;
    this.calificacion.calificacion = this.value;
    this.calificacionService.insertarCalificacion(this.calificacion);
    window.location.href = '/homez/arrendatario/dashboard';
  }
}
