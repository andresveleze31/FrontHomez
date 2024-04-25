import { Component } from '@angular/core';
import { Arrendatario } from '../../models/Arrendatario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArrendatarioService } from '../../services/arrendatario/arrendatario.service';

@Component({
  selector: 'app-register-arrendatario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-arrendatario.component.html',
  styleUrl: './register-arrendatario.component.scss',
})
export class RegisterArrendatarioComponent {
  arrendatario: Arrendatario;

  constructor(private arrendatarioService: ArrendatarioService) {
    this.arrendatario = new Arrendatario();
  }

  insertarArrendatario() {
    console.log(this.arrendatario);

    this.arrendatarioService.insertarArrendatario(this.arrendatario).then(
      (response) => {
        window.location.href = '/homez/home';
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
