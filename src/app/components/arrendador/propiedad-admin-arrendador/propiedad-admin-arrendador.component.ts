import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PropiedadService } from '../../../services/propiedad/propiedad.service';
import { Propiedad } from '../../../models/Propiedad';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-propiedad-admin-arrendador',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './propiedad-admin-arrendador.component.html',
  styleUrl: './propiedad-admin-arrendador.component.scss',
})
export class PropiedadAdminArrendadorComponent {
  propiedad: Propiedad;

  @Input() id: string | number | null | undefined = null;
  @Input() nombre: string = '';
  @Input() departamento: string = '';
  @Input() municipio: string = '';
  @Input() estado: boolean = true;
  @Input() habitaciones: number | null | undefined = null;
  @Input() banos: string = '';
  @Input() valor: number | null | undefined = null;
  @Input() img: string = '';
  @Input() personas: number | null | undefined = null;

  constructor(private propiedadService: PropiedadService) {
    this.propiedad = new Propiedad();
  }

  async cambiarEstado() {
    await this.propiedadService
      .getPropiedadById(Number(this.id))
      .then((post) => {
        this.propiedad = post;
        console.log(this.propiedad);
        this.propiedad.activa = !this.estado;
        this.estado = !this.estado;
        console.log(this.propiedad);
        this.propiedadService.updatePropiedad(this.propiedad);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
