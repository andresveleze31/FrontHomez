import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendadorComponent } from '../../../components/arrendador/sidebararrendador/sidebararrendador.component';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { Foto } from '../../../models/Foto';
import { FotoService } from '../../../services/foto/foto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Propiedad } from '../../../models/Propiedad';
import { PropiedadService } from '../../../services/propiedad/propiedad.service';
import { Departamento } from '../../../models/Departamento';
import { DepartamentoService } from '../../../services/departamento/departamento.service';
import { Municipio } from '../../../models/Municipio';
import { MunicipioService } from '../../../services/municipio/municipio.service';
import { TipoIngreso } from '../../../models/TipoIngreso';
import { TipoIngresoService } from '../../../services/tipoingreso/tipo-ingreso.service';
import { TipoService } from '../../../services/tipo/tipo.service';
import { Tipo } from '../../../models/Tipo';
import { ArrendadorService } from '../../../services/arrendador/arrendador.service';
import { Arrendador } from '../../../models/Arrendador';

@Component({
  selector: 'app-create-propiedad',
  standalone: true,
  imports: [
    NavbardashboardComponent,
    SidebararrendadorComponent,
    StepperModule,
    ButtonModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './create-propiedad.component.html',
  styleUrl: './create-propiedad.component.scss',
})
export class CreatePropiedadComponent {
  fotos: Foto[] = [];
  propiedad: Propiedad;
  departamentos: Departamento[] = [];
  municipios: Municipio[] = [];
  tipoingresos: TipoIngreso[] = [];
  tipos: Tipo[] = [];
  arrendador: Arrendador;

  constructor(
    private fotoService: FotoService,
    private propiedadService: PropiedadService,
    private departamentoService: DepartamentoService,
    private municipioService: MunicipioService,
    private tiposIngresoService: TipoIngresoService,
    private tipoService: TipoService,
    private arrendadorService: ArrendadorService
  ) {
    this.fotos = [];
    this.arrendador = new Arrendador();
    this.propiedad = new Propiedad();
  }

  ngOnInit(): void {
    this.cargarDepartamentos();
    this.cargarMunicipios();
    this.cargarTiposIngreso();
    this.cargarArrendador();
    this.cargarTipos();
  }

  insertarPropiedad() {
    this.propiedad.arrendador = this.arrendador;

    this.propiedadService.insertarPropiedad(this.propiedad).then(
      (response) => {
        for (let i = 0; i < this.fotos.length; i++) {
          const propiedadTemp = new Propiedad();
          propiedadTemp.id = response.id;
          this.fotos[i].propiedad = propiedadTemp;
          console.log(this.fotos[i]);

          this.insertarFoto(this.fotos[i]);
        }
        return;
        window.location.href = '/homez/arrendador/propiedades';
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  insertarFoto(foto: Foto) {
    this.fotoService.insertarFoto(foto);
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

  cargarMunicipios() {
    // Externo
    this.municipioService
      .getMunicipios()
      .then((post) => {
        this.municipios = post;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  cargarTiposIngreso() {
    // Externo
    this.tiposIngresoService
      .getTiposIngreso()
      .then((post) => {
        this.tipoingresos = post;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  cargarDepartamentos() {
    // Externo
    this.departamentoService
      .getDepartamentos()
      .then((post) => {
        this.departamentos = post;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  cargarArrendador() {
    this.arrendadorService
      .getArrendadorByID()
      .then((post) => {
        this.arrendador = post;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onClick(event: MouseEvent) {
    event.preventDefault(); // Esto previene el comportamiento predeterminado del clic en el botón.
    const foto = new Foto();
    this.fotos.push(foto);
    console.log(this.fotos);
  }

  onClickDelete(event: MouseEvent) {
    event.preventDefault(); // Esto previene el comportamiento predeterminado del clic en el botón.
    this.fotos.pop();
    console.log(this.fotos);
  }
}
