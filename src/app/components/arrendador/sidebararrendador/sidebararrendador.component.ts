import { Component } from '@angular/core';
import { Arrendador } from '../../../models/Arrendador';
import { ArrendadorService } from '../../../services/arrendador/arrendador.service';

@Component({
  selector: 'app-sidebararrendador',
  standalone: true,
  imports: [],
  templateUrl: './sidebararrendador.component.html',
  styleUrl: './sidebararrendador.component.scss',
})
export class SidebararrendadorComponent {
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
        
        localStorage.setItem('userId', String(post.id)+'Arrendador');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  currentLocation = '';

  logout() {
    window.location.href = '/';
    localStorage.removeItem('idHomezArrendador');
  }
}
