import { Component } from '@angular/core';
import { Arrendador } from '../../models/Arrendador';
import { ArrendadorService } from '../../services/arrendador/arrendador.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-arrendador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-arrendador.component.html',
  styleUrl: './register-arrendador.component.scss',
})
export class RegisterArrendadorComponent {
  arrendador: Arrendador;

  constructor(private arrendadorService: ArrendadorService) {
    this.arrendador = new Arrendador();
  }

  insertarArrendador() {

    console.log(this.arrendador);

    this.arrendadorService.insertarArrendador(this.arrendador).then(
      (response) => {
        window.location.href = '/homez/home';
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
