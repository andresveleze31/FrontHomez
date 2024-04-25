import { Component, Input } from '@angular/core';
import { Solicitud } from '../../../models/Solicitud';
import { PropiedadService } from '../../../services/propiedad/propiedad.service';
import { Propiedad } from '../../../models/Propiedad';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solicitud-admin-arrendatario',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './solicitud-admin-arrendatario.component.html',
  styleUrl: './solicitud-admin-arrendatario.component.scss',
})
export class SolicitudAdminArrendatarioComponent {
  @Input() solicitud?: Solicitud;
  propiedad?: Propiedad;
  img?: string | null | undefined;

  constructor(
    private propiedadService: PropiedadService,
  ) {
    this.propiedad = new Propiedad();
  }

  ngOnInit(): void {
    this.cargarPropiedad();
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
