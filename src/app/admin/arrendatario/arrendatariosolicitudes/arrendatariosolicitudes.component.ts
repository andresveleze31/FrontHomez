import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendatarioComponent } from '../../../components/arrendatario/sidebararrendatario/sidebararrendatario.component';
import { SolicitudAdminArrendatarioComponent } from '../../../components/arrendatario/solicitud-admin-arrendatario/solicitud-admin-arrendatario.component';

@Component({
  selector: 'app-arrendatariosolicitudes',
  standalone: true,
  imports: [NavbardashboardComponent, SidebararrendatarioComponent, SolicitudAdminArrendatarioComponent],
  templateUrl: './arrendatariosolicitudes.component.html',
  styleUrl: './arrendatariosolicitudes.component.scss'
})
export class ArrendatariosolicitudesComponent {

}
