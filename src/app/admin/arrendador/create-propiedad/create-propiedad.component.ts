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
  fotofrontal: Foto;
  fotoperfil: Foto;
  fotointerna: Foto;
  fotointerna2: Foto;
  fotointerna3: Foto;
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
    this.fotofrontal = new Foto();
    this.fotoperfil = new Foto();
    this.fotointerna = new Foto();
    this.fotointerna2 = new Foto();
    this.fotointerna3 = new Foto();
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

  insertarPropiedad(event: Event) {
    event.preventDefault();
    this.propiedad.arrendador = this.arrendador;

    console.log(this.propiedad);

    this.propiedadService.insertarPropiedad(this.propiedad).then(
      (response) => {
        const propiedadTemp = new Propiedad();
        propiedadTemp.id = response.id;
        this.fotofrontal.propiedad = propiedadTemp;
        this.fotoperfil.propiedad = propiedadTemp;
        this.fotointerna.propiedad = propiedadTemp;
        this.fotointerna2.propiedad = propiedadTemp;
        this.fotointerna3.propiedad = propiedadTemp;

        if (this.fotofrontal.foto != '' && this.fotofrontal.foto != null) {
          this.insertarFoto(this.fotofrontal);
        }

        if (this.fotoperfil.foto != '' && this.fotoperfil.foto != null) {
          this.insertarFoto(this.fotoperfil);
        }

        if (this.fotointerna.foto != '' && this.fotointerna.foto != null) {
          this.insertarFoto(this.fotointerna);
        }

        if (this.fotointerna2.foto != '' && this.fotointerna2.foto != null) {
          this.insertarFoto(this.fotointerna2);
        }

        if (this.fotointerna3.foto != '' && this.fotointerna3.foto != null) {
          this.insertarFoto(this.fotointerna3);
        }

        window.location.href = '/homez/arrendador/mis-propiedades';
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
}
