import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tipo',
  standalone: true,
  imports: [],
  templateUrl: './tipo.component.html',
  styleUrl: './tipo.component.scss',
})
export class TipoComponent {
  @Input() tipo: string = '';
  @Input() img: string = '';
  @Input() propiedades: string = '';
}
