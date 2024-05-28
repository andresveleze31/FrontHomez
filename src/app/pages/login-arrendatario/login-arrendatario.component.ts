import { Component } from '@angular/core';
import { Arrendatario } from '../../models/Arrendatario';
import { ArrendatarioService } from '../../services/arrendatario/arrendatario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-login-arrendatario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-arrendatario.component.html',
  styleUrl: './login-arrendatario.component.scss',
})
export class LoginArrendatarioComponent {
  correo: String;
  contrasenia: String;

  constructor() {
    this.correo = '';
    this.contrasenia = '';
  }
  loginArrendatario() {
    console.log(this.correo, this.contrasenia);

    var info = { correo: this.correo, contrasena: this.contrasenia };

    axios
      .post(
        'https://gruposjaveriana.dynaco.co/api/homez/jwt/security/autenticar/arrendatario',
        info,
        {
          params: info,
        }
      )
      .then((response) => {
        if (response.data == 'Cuenta No Encontrada') {
          return;
        } else {
          localStorage.setItem('idHomezArrendatario', response.data);
          window.location.href = '/homez/arrendatario/dashboard';
        }
      })
      .catch((error) => {
        console.error('Error al autenticar:', error);
      });
  }
}
