import { Component, Input } from '@angular/core';
import { Solicitud } from '../../../models/Solicitud';
import { FotoService } from '../../../services/foto/foto.service';
import { PropiedadService } from '../../../services/propiedad/propiedad.service';
import { Propiedad } from '../../../models/Propiedad';
import { ArrendadorsolicitudesComponent } from '../../../admin/arrendador/arrendadorsolicitudes/arrendadorsolicitudes.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solicitud-admin-arrendador',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './solicitud-admin-arrendador.component.html',
  styleUrl: './solicitud-admin-arrendador.component.scss',
})
export class SolicitudAdminArrendadorComponent {
  @Input() solicitud?: Solicitud;
  propiedad?: Propiedad;
  img?: string | null | undefined;

  constructor(
    private propiedadService: PropiedadService,
    private modalService: ArrendadorsolicitudesComponent
  ) {
    this.propiedad = new Propiedad();
  }

  ngOnInit(): void {
    this.cargarPropiedad();
  }

  showModal() {
    this.modalService.showModalEstado();
  }

  cargarPropiedad() {
    this.propiedadService
      .getPropiedadById(Number(this.solicitud?.propiedad?.id))
      .then((post) => {
        this.propiedad = post;
        if (post.fotos) {
          this.img = post.fotos[0].foto;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  formatDate(dateString: string | number | null | undefined): string {
    if (!dateString) {
      return '';
    }
    const date =
      typeof dateString === 'string'
        ? new Date(dateString)
        : new Date(dateString);
    return date.toLocaleDateString(); // Puedes ajustar el formato según tus necesidades
  }
}
