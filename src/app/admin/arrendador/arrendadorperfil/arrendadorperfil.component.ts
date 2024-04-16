import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendadorComponent } from '../../../components/arrendador/sidebararrendador/sidebararrendador.component';
import { Arrendador } from '../../../models/Arrendador';
import { ArrendadorService } from '../../../services/arrendador/arrendador.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arrendadorperfil',
  standalone: true,
  imports: [NavbardashboardComponent, SidebararrendadorComponent, FormsModule],
  templateUrl: './arrendadorperfil.component.html',
  styleUrl: './arrendadorperfil.component.scss',
})
export class ArrendadorperfilComponent {
  arrendador: Arrendador;

  constructor(private arrendadorService: ArrendadorService) {
    this.arrendador = new Arrendador();
  }

  ngOnInit(): void {
    this.cargarArrendador();
  }

  cargarArrendador() {
    // Externo
    this.arrendadorService
      .getArrendadorByID()
      .then((post) => {
        this.arrendador = post;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateArrendador() {
    console.log(this.arrendador);

    this.arrendadorService.updateArrendador(this.arrendador).then(
      (response) => {
        window.location.href = '/homez/arrendador/dashboard';
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
