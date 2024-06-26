import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendatarioComponent } from '../../../components/arrendatario/sidebararrendatario/sidebararrendatario.component';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SolicitudService } from '../../../services/solicitud/solicitud.service';
import { CalificarArrendador } from '../../../models/CalificarArrendador';
import { Solicitud } from '../../../models/Solicitud';
import { CalificarArrendadorService } from '../../../services/calificacionArrendador/calificar-arrendador.service';
import { Propiedad } from '../../../models/Propiedad';

@Component({
  selector: 'app-calificar-arrendador',
  standalone: true,
  imports: [
    NavbardashboardComponent,
    SidebararrendatarioComponent,
    RatingModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './calificar-arrendador.component.html',
  styleUrl: './calificar-arrendador.component.scss',
})
export class CalificarArrendadorComponent {
  value!: number;
  comentario: string | null = null;
  propertyId: number | string | null = null;
  calificacion: CalificarArrendador 
  solicitud: Solicitud | null;
  propiedad: Propiedad | undefined | null;

  constructor(private route: ActivatedRoute, private solicitudService: SolicitudService, private calificacionService: CalificarArrendadorService) {
    this.calificacion = new CalificarArrendador();
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
        console.log(this.propiedad);    
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
    window.location.href = "/homez/arrendatario/dashboard"
  }
}
