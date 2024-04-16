import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from '../../components/footer/footer.component';
import { DepartamentoComponent } from '../../components/departamento/departamento.component';
import { Departamento } from '../../models/Departamento';
import { DepartamentoService } from '../../services/departamento/departamento.service';
import { Tipo } from '../../models/Tipo';
import { TipoService } from '../../services/tipo/tipo.service';
import { TipoComponent } from '../../components/tipo/tipo.component';
import { Propiedad } from '../../models/Propiedad';
import { PropiedadService } from '../../services/propiedad/propiedad.service';
import { PropiedadCardComponent } from '../../components/propiedad-card/propiedad-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    CarouselModule,
    FooterComponent,
    DepartamentoComponent,
    TipoComponent,
    PropiedadCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  responsiveOptions = [];

  products: Departamento[] = [];
  tipos: Tipo[] = [];
  propiedades: Propiedad[] = [];

  constructor(private departamentoService: DepartamentoService,
    private tipoService: TipoService, private propiedadService: PropiedadService
  ) {}

  ngOnInit(): void {
    this.cargarDepartamentos();
    this.cargarTipos();
    this.cargarPropiedades();
  }

  cargarDepartamentos() {
    // Externo
    this.departamentoService
      .getDepartamentos()
      .then((post) => {
        this.products = post;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  cargarTipos(){
    // Externo
    this.tipoService
      .getTipos()
      .then((post) => {
        this.tipos = post;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  cargarPropiedades(){

    this.propiedadService
      .getPropiedades()
      .then((post) => {
        this.propiedades = post;
        console.log(this.propiedades);
      })
      .catch((error) => {
        console.error(error);
      });

  }
}
