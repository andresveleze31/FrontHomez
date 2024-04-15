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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    CarouselModule,
    FooterComponent,
    DepartamentoComponent,
    TipoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  responsiveOptions = [];

  products: Departamento[] = [];
  tipos: Tipo[] = [];

  constructor(private departamentoService: DepartamentoService,
    private tipoService: TipoService
  ) {}

  ngOnInit(): void {
    this.cargarDepartamentos();
    this.cargarTipos();
  }

  cargarDepartamentos() {
    // Externo
    this.departamentoService
      .getDepartamentos()
      .then((post) => {
        this.products = post;
        console.log(this.products);
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
        console.log(this.tipos);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
