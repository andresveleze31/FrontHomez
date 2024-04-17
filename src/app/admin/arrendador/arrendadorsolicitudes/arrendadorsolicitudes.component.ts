import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendadorComponent } from '../../../components/arrendador/sidebararrendador/sidebararrendador.component';
import { SolicitudAdminArrendadorComponent } from '../../../components/arrendador/solicitud-admin-arrendador/solicitud-admin-arrendador.component';

@Component({
  selector: 'app-arrendadorsolicitudes',
  standalone: true,
  imports: [NavbardashboardComponent, SidebararrendadorComponent, SolicitudAdminArrendadorComponent],
  templateUrl: './arrendadorsolicitudes.component.html',
  styleUrl: './arrendadorsolicitudes.component.scss'
})
export class ArrendadorsolicitudesComponent {

}
