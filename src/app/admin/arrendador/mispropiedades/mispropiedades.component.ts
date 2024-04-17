import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendadorComponent } from '../../../components/arrendador/sidebararrendador/sidebararrendador.component';
import { PropiedadAdminArrendadorComponent } from '../../../components/arrendador/propiedad-admin-arrendador/propiedad-admin-arrendador.component';

@Component({
  selector: 'app-mispropiedades',
  standalone: true,
  imports: [NavbardashboardComponent, SidebararrendadorComponent, PropiedadAdminArrendadorComponent],
  templateUrl: './mispropiedades.component.html',
  styleUrl: './mispropiedades.component.scss'
})
export class MispropiedadesComponent {

}
