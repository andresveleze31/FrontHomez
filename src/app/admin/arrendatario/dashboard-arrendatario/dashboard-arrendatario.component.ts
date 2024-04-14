import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendatarioComponent } from '../../../components/arrendatario/sidebararrendatario/sidebararrendatario.component';

@Component({
  selector: 'app-dashboard-arrendatario',
  standalone: true,
  imports: [NavbardashboardComponent, SidebararrendatarioComponent],
  templateUrl: './dashboard-arrendatario.component.html',
  styleUrl: './dashboard-arrendatario.component.scss'
})
export class DashboardArrendatarioComponent {

}
