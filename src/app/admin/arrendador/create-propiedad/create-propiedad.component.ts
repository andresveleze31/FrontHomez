import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendadorComponent } from '../../../components/arrendador/sidebararrendador/sidebararrendador.component';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-create-propiedad',
  standalone: true,
  imports: [NavbardashboardComponent, SidebararrendadorComponent, StepperModule,ButtonModule],
  templateUrl: './create-propiedad.component.html',
  styleUrl: './create-propiedad.component.scss'
})
export class CreatePropiedadComponent {

}
