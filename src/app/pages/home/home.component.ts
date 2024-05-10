import { Component, HostListener } from '@angular/core';
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
import { SidebarModule } from 'primeng/sidebar';
import { MobileNavbarComponent } from '../../components/mobile-navbar/mobile-navbar.component';

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
    PropiedadCardComponent,
    SidebarModule,
    MobileNavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  sidebarVisible2: boolean = true;

  responsiveOptions = [];

  products: Departamento[] = [];
  tipos: Tipo[] = [];
  propiedades: Propiedad[] = [];

  numVisible: number;
  numVisible2: number;

  constructor(
    private departamentoService: DepartamentoService,
    private tipoService: TipoService,
    private propiedadService: PropiedadService
  
  ) {
    this.sidebarVisible2 = true;
    if (window.innerWidth < 639) {
      this.numVisible = 1;
      this.numVisible2 = 1;
    } else if (window.innerWidth < 769) {
      this.numVisible = 3;
      this.numVisible2 = 2;
    } else {
      this.numVisible = 5;
      this.numVisible2 = 4;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setNumVisible(window.innerWidth);
    this.setNumVisible2(window.innerWidth);
  }

  private setNumVisible(screenWidth: number) {
    if (screenWidth < 639) {
      this.numVisible = 1;
    } else if (screenWidth < 769) {
      this.numVisible = 3;
    } else {
      this.numVisible = 5;
    }
  }

  private setNumVisible2(screenWidth: number) {
    if (screenWidth < 639) {
      this.numVisible2 = 1;
    } else if (screenWidth < 769) {
      this.numVisible2 = 2;
    } else {
      this.numVisible2 = 4;
    }
  }

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

  cargarTipos() {
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

  cargarPropiedades() {
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
