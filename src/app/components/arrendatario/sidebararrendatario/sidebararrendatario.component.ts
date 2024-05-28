import { Component } from '@angular/core';
import { Arrendatario } from '../../../models/Arrendatario';
import { ArrendatarioService } from '../../../services/arrendatario/arrendatario.service';

@Component({
  selector: 'app-sidebararrendatario',
  standalone: true,
  imports: [],
  templateUrl: './sidebararrendatario.component.html',
  styleUrl: './sidebararrendatario.component.scss',
})
export class SidebararrendatarioComponent {
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
        localStorage.setItem('userId', String(post.id) + 'Arrendatario');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  logout() {
    window.location.href = '/';
    localStorage.removeItem('idHomezArrendatario');
  }
}
