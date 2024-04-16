import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendatarioComponent } from '../../../components/arrendatario/sidebararrendatario/sidebararrendatario.component';

@Component({
  selector: 'app-arrendatarioperfil',
  standalone: true,
  imports: [NavbardashboardComponent, SidebararrendatarioComponent],
  templateUrl: './arrendatarioperfil.component.html',
  styleUrl: './arrendatarioperfil.component.scss'
})
export class ArrendatarioperfilComponent {

}
