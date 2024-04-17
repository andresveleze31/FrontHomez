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

@Component({
  selector: 'app-propiedad-detalles',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    GalleriaModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './propiedad-detalles.component.html',
  styleUrl: './propiedad-detalles.component.scss',
})
export class PropiedadDetallesComponent {
  propiedad: Propiedad;
  banios: number | null | undefined = 3;
  propertyId: string | null = null;
  images: Foto[] | undefined | null = [];
  cantidadPersonas: number | null | undefined = 0;

  constructor(
    private propiedadService: PropiedadService,
    private route: ActivatedRoute
  ) {
    this.propiedad = new Propiedad();
    this.banios = 3;
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
