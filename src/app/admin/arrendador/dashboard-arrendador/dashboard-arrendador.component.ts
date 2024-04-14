import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendadorComponent } from '../../../components/arrendador/sidebararrendador/sidebararrendador.component';

@Component({
  selector: 'app-dashboard-arrendador',
  standalone: true,
  imports: [NavbardashboardComponent, SidebararrendadorComponent],
  templateUrl: './dashboard-arrendador.component.html',
  styleUrl: './dashboard-arrendador.component.scss'
})
export class DashboardArrendadorComponent {

}
