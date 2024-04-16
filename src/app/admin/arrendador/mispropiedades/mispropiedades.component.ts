import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendadorComponent } from '../../../components/arrendador/sidebararrendador/sidebararrendador.component';

@Component({
  selector: 'app-mispropiedades',
  standalone: true,
  imports: [NavbardashboardComponent, SidebararrendadorComponent],
  templateUrl: './mispropiedades.component.html',
  styleUrl: './mispropiedades.component.scss'
})
export class MispropiedadesComponent {

}
