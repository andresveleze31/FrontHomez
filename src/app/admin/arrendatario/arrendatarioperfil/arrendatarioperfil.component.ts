import { Component } from '@angular/core';
import { NavbardashboardComponent } from '../../../components/navbardashboard/navbardashboard.component';
import { SidebararrendatarioComponent } from '../../../components/arrendatario/sidebararrendatario/sidebararrendatario.component';
import { Arrendatario } from '../../../models/Arrendatario';
import { ArrendatarioService } from '../../../services/arrendatario/arrendatario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arrendatarioperfil',
  standalone: true,
  imports: [NavbardashboardComponent, SidebararrendatarioComponent, FormsModule],
  templateUrl: './arrendatarioperfil.component.html',
  styleUrl: './arrendatarioperfil.component.scss',
})
export class ArrendatarioperfilComponent {
  arrendador: Arrendatario;

  constructor(private arrendatarioService: ArrendatarioService) {
    this.arrendador = new Arrendatario();
  }

  ngOnInit(): void {
    this.cargarArrendador();
  }

  cargarArrendador() {
    // Externo
    this.arrendatarioService
      .getArrendatarioByID()
      .then((post) => {
        this.arrendador = post;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateArrendador() {

    this.arrendatarioService.updateArrendatario(this.arrendador).then(
      (response) => {
        window.location.href = '/homez/arrendatario/dashboard';
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
