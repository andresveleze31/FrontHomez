import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-login-arrendador',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastModule, RippleModule],
  templateUrl: './login-arrendador.component.html',
  styleUrl: './login-arrendador.component.scss',
  providers: [],
})
export class LoginArrendadorComponent {
  correo: String;
  contrasenia: String;

  constructor(
  ) {
    this.correo = '';
    this.contrasenia = '';
  }


  loginArrendador() {
    console.log(this.correo, this.contrasenia);

    var info = { correo: this.correo, contrasena: this.contrasenia };

    axios
      .post(
        'https://homezbackend.onrender.com/api/homez/jwt/security/autenticar/arrendador',
        info,
        {
          params: info,
        }
      )
      .then((response) => {
        if (response.data == 'Cuenta No Encontrada') {
          return;
        } else {
          localStorage.setItem('idHomezArrendador', response.data);
          window.location.href = '/homez/arrendador/dashboard';
        }
      })
      .catch((error) => {
        console.error('Error al autenticar:', error);
      });
  }
}
