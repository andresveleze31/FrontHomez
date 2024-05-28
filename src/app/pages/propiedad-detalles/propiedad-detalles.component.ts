import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Propiedad } from '../../models/Propiedad';
import { PropiedadService } from '../../services/propiedad/propiedad.service';
import { ActivatedRoute } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { Foto } from '../../models/Foto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Solicitud } from '../../models/Solicitud';
import { Arrendatario } from '../../models/Arrendatario';
import { Estado } from '../../models/Estado';
import { SolicitudService } from '../../services/solicitud/solicitud.service';
import { MobileNavbarComponent } from '../../components/mobile-navbar/mobile-navbar.component';

@Component({
  selector: 'app-propiedad-detalles',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    GalleriaModule,
    CommonModule,
    FormsModule,
    MobileNavbarComponent
  ],
  templateUrl: './propiedad-detalles.component.html',
  styleUrl: './propiedad-detalles.component.scss',
})
export class PropiedadDetallesComponent {
  arrendatario: Arrendatario;
  estado: Estado;
  solicitud: Solicitud;
  propiedad: Propiedad;
  banios: number | null | undefined = 3;
  propertyId: string | null = null;
  images: Foto[] | undefined | null = [];
  cantidadPersonas: number | null | undefined = 0;

  constructor(
    private propiedadService: PropiedadService,
    private solicitudService: SolicitudService,
    private route: ActivatedRoute
  ) {
    this.propiedad = new Propiedad();
    this.banios = 3;
    this.solicitud = new Solicitud();
    this.arrendatario = new Arrendatario();
    this.estado = new Estado();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.propertyId = params.get('id');
    });

    this.cargarPropiedad();
    this.banios = this.propiedad.baños;
  }

  get numeros(): number[] {
    // Verifica si this.propiedad?.personas es nulo o indefinido
    const cantidadPersonas = this.propiedad?.personas ?? 0;
    return Array.from({ length: cantidadPersonas }, (_, i) => i + 1);
  }

  insertarSolicitud(event: Event) {
    event.preventDefault();
    if (this.propiedad?.valor !== null && this.propiedad?.valor !== undefined) {
      this.solicitud.valor = Number(this.propiedad.valor) * 5;
    }

    if (this.propiedad) {
      this.solicitud.propiedad = this.propiedad;
    }

    this.arrendatario.id = 1;
    this.estado.id = 1;
    this.solicitud.arrendatario = this.arrendatario;
    this.solicitud.estado = this.estado;

    this.solicitudService.insertarSolicitud(this.solicitud);
    setTimeout(() => {
      window.location.href = '/homez/arrendatario/solicitudes';
    }, 2000)
  }

  cargarPropiedad() {
    this.propiedadService
      .getPropiedadById(Number(this.propertyId))
      .then((post) => {
        this.propiedad = post;
        this.images = post.fotos;
        this.cantidadPersonas = post.personas;
        console.log(this.propiedad);
        console.log(this.images);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
